import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Validate required fields
    const { firstName, lastName, email, phone, userType, city } = formData;
    
    if (!firstName || !lastName || !email || !phone || !userType || !city) {
      return NextResponse.json(
        { error: "Tous les champs requis doivent être remplis." },
        { status: 400 }
      );
    }

    // Get email credentials from environment variables (trim in case of whitespace)
    const emailUser = process.env.EMAIL_USER?.trim() ?? "";
    const emailPassword = process.env.EMAIL_PASSWORD?.trim() ?? "";
    const recipientEmail = process.env.RECIPIENT_EMAIL?.trim() || emailUser;

    if (!emailUser || !emailPassword) {
      const missing = [];
      if (!emailUser) missing.push("EMAIL_USER");
      if (!emailPassword) missing.push("EMAIL_PASSWORD");
      console.error("Email credentials not configured. Missing:", missing.join(", "));
      return NextResponse.json(
        {
          error:
            "Configuration email manquante. Vérifiez que .env (ou .env.local) contient EMAIL_USER et EMAIL_PASSWORD, puis redémarrez le serveur (pnpm dev).",
        },
        { status: 500 }
      );
    }

    // Create transporter for Gmail (port 587 + STARTTLS works better through proxies/firewalls)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    // Format the email content
    const emailContent = `
Nouvelle inscription à la liste d'attente KLYPOP

Informations du contact:
- Prénom: ${firstName}
- Nom: ${lastName}
- Email: ${email}
- Téléphone: ${phone}
- Type d'utilisateur: ${userType === "client" ? "Client" : userType === "restaurateur" ? "Restaurateur" : "Boutique"}
- Ville: ${city}
${formData.companyName ? `- Entreprise: ${formData.companyName}` : ""}
${formData.referralCode ? `- Code de parrainage: ${formData.referralCode}` : ""}

Date d'inscription: ${new Date().toLocaleString("fr-FR", {
      dateStyle: "full",
      timeStyle: "short",
    })}
    `.trim();

    // Send email
    const mailOptions = {
      from: `"KLYPOP Waitlist" <${emailUser}>`,
      to: recipientEmail,
      subject: `Nouvelle inscription KLYPOP - ${firstName} ${lastName}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6B8EFF;">Nouvelle inscription à la liste d'attente KLYPOP</h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #030213; margin-top: 0;">Informations du contact:</h3>
            <ul style="list-style: none; padding: 0;">
              <li style="margin: 10px 0;"><strong>Prénom:</strong> ${firstName}</li>
              <li style="margin: 10px 0;"><strong>Nom:</strong> ${lastName}</li>
              <li style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
              <li style="margin: 10px 0;"><strong>Téléphone:</strong> <a href="tel:${phone}">${phone}</a></li>
              <li style="margin: 10px 0;"><strong>Type d'utilisateur:</strong> ${userType === "client" ? "Client" : userType === "restaurateur" ? "Restaurateur" : "Boutique"}</li>
              <li style="margin: 10px 0;"><strong>Ville:</strong> ${city}</li>
              ${formData.companyName ? `<li style="margin: 10px 0;"><strong>Entreprise:</strong> ${formData.companyName}</li>` : ""}
              ${formData.referralCode ? `<li style="margin: 10px 0;"><strong>Code de parrainage:</strong> ${formData.referralCode}</li>` : ""}
            </ul>
          </div>
          
          <p style="color: #717182; font-size: 14px;">
            Date d'inscription: ${new Date().toLocaleString("fr-FR", {
              dateStyle: "full",
              timeStyle: "short",
            })}
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email envoyé avec succès!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'email. Veuillez réessayer plus tard." },
      { status: 500 }
    );
  }
}

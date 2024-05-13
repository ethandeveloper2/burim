import nodemailer from 'nodemailer';
import { validateEmail } from '@Utils/validation';

export const POST = async (req: Request) => {
  const body = await req.json();

  // SMTP 설정
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_AUTH_USER, // 메일 계정
      pass: process.env.NEXT_PUBLIC_EMAIL_AUTH_PASSWORD // 앱 비밀번호
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // 이메일 전송 함수
  const sendEmail = async () => {
    const { from, name, text } = body;

    if (!validateEmail(from).result) {
      throw new Error('이메일 형식 오류로 인한 메일 전송 실패');
    }

    return await transporter.sendMail({
      from,
      to: process.env.NEXT_PUBLIC_EMAIL_AUTH_USER,
      subject: `[${name}님의 문의 사항]`,
      html: `<pre>${text}</pre>`,
    });
  };

  // Nodemailer 이메일 전송 로직
  return sendEmail()
    .then(() => {
      return new Response(JSON.stringify({ message: '메일 전송 성공' }), {
        status: 200,
      });
    })
    .catch((error) => {
      console.error(error);

      return new Response(JSON.stringify({ message: '메일 전송 실패' }), {
        status: 500,
      });
    });
}
export default async function handler(req, res) {
  // Vercel 서버리스 API 기본 라우터
  if (req.method === 'POST') {
    try {
      const { action, data } = req.body;

      if (action === 'analyzeDocument') {
        // Gemini AI 연동 처리 로직
        return res.status(200).json({ success: true, message: "공문 분석 완료", data });
      }

      return res.status(400).json({ success: false, message: "알 수 없는 요청입니다." });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.toString() });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
# ElevenLabs Text-to-Speech Converter

A modern web application that converts text to natural-sounding speech using ElevenLabs' advanced AI voice technology.

## 🚀 Live Demo

**Production**: https://11labs-48hz9uq6s-humayuns-projects-3c62eba5.vercel.app

## ✨ Features

- **Text-to-Speech Conversion**: Convert any text into high-quality, natural-sounding speech
- **Real-time Processing**: Instant audio generation using ElevenLabs API
- **Audio Playback**: Play generated audio directly in the browser
- **Download Support**: Download generated MP3 files
- **Secure API Key Management**: Secure input and storage of API keys
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark Mode Support**: Automatic theme adaptation
- **Modern UI**: Built with Next.js 15, TypeScript, and Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS
- **API**: ElevenLabs Text-to-Speech API
- **Deployment**: Vercel
- **Package Manager**: npm

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- ElevenLabs API key

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd 11labs
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```bash
ELEVENLABS_API_KEY=your_elevenlabs_api_key_here
```

### 4. Get Your ElevenLabs API Key

1. Visit [ElevenLabs Dashboard](https://elevenlabs.io/app/settings/api-keys)
2. Create a new API key
3. Copy the key to your `.env.local` file

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Usage

1. **Enter API Key**: Input your ElevenLabs API key in the configuration section
2. **Type Text**: Enter the text you want to convert to speech
3. **Convert**: Click "Convert to Speech" to generate audio
4. **Play/Download**: Play the audio or download the MP3 file

## 🔧 API Configuration

The application uses the following ElevenLabs settings:
- **Voice ID**: `JBFqnCBsd6RMkjVDRZzb` (Default voice)
- **Model**: `eleven_multilingual_v2` (High-quality multilingual model)
- **Output Format**: MP3 at 44.1kHz, 128kbps

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── text-to-speech/
│   │       └── route.ts          # API endpoint for TTS conversion
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main page component
├── components/
│   ├── ApiKeyInput.tsx           # API key input component
│   └── TextToSpeech.tsx         # Main TTS interface
└── ...
```

## 🚀 Deployment

### Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Deploy: `vercel --prod`

### Manual Deployment

```bash
npm run build
npm start
```

## 🔒 Security

- API keys are stored securely in environment variables
- Client-side API key input is handled securely
- No sensitive data is exposed in the frontend code

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [ElevenLabs](https://elevenlabs.io/) for their amazing text-to-speech API
- [Next.js](https://nextjs.org/) for the excellent React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

## 📞 Support

If you encounter any issues or have questions:

1. Check the [ElevenLabs API documentation](https://docs.elevenlabs.io/)
2. Review the [Next.js documentation](https://nextjs.org/docs)
3. Open an issue in this repository

---

**Note**: Make sure to keep your ElevenLabs API key secure and never commit it to version control.

declare global {
    interface Window {
      webkitSpeechRecognition?: any;
      SpeechRecognition?: any;
    }
  }

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

export const recognition = new SpeechRecognition();

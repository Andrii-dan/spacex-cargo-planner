'use client';

import { useEffect } from 'react';

type Props = {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  duration: number;
};

export default function Snackbar({
  message,
  isOpen,
  onClose,
  duration,
}: Props) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [message, onClose, duration]);

  return isOpen ? (
    <div className="fixed bottom-20 left-2/4 -translate-x-2/4 py-3 px-12 rounded-md bg-primary shadow-lg shadow-slate-600">
      <p>{message}</p>
    </div>
  ) : null;
}

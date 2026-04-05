type BackButtonProps = {
  onBack: () => void;
};

export function BackButton({ onBack }: BackButtonProps) {
  return (
    <button type="button" className="back-btn" onClick={onBack}>
      ← Portfolio
    </button>
  );
}

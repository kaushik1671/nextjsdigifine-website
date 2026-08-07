const ActionButtons = ({
  onGenerate,
  onPrint,
  onPDF,
  onReset,
  showInvoice,
  isSaving,
  isInvoiceSaved,
}) => {
  return (
    <div className="flex gap-4">
      <button
        onClick={onGenerate}
      >
        Generate
      </button>

      {showInvoice && (
        <>
          <button onClick={onPrint}>
            Print
          </button>

          <button onClick={onPDF}>
            PDF
          </button>
        </>
      )}

      <button onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

export default ActionButtons;
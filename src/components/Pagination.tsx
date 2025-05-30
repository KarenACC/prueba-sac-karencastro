interface PaginationProps {
  onNext: () => void;
  onPrev: () => void;
  showNext: boolean;
  showPrev: boolean;
}

export const Pagination = ({ onNext, onPrev, showNext, showPrev }: PaginationProps) => {
  return (
    <div className="pagination">
      {showPrev && <button className="button" onClick={onPrev}>Anterior</button>}
      {showNext && <button className="button" onClick={onNext}>Siguiente</button>}
    </div>
  );
};

import React from "react";
import '../Button/AddButton.css'

interface AddInternButtonProps {
    onClick: () => void;
  }
  
  const AddButton: React.FC<AddInternButtonProps> = ({ onClick }) => {
    return <button onClick={onClick} className="addButton">Добавить стажёра</button>;
};

export default AddButton;
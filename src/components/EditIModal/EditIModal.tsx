import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Intern } from "../../interfaces/types";

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  intern: Intern;
  onSave: (updatedIntern: Intern) => void;
}

const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  onClose,
  intern,
  onSave,
}) => {
  const [formState, setFormState] = useState<Omit<Intern, "id">>(intern);

  useEffect(() => {
    setFormState(intern);
  }, [intern]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...intern, ...formState });
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Edit Intern">
      <h2>Редактировать стажёра</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="name"
          name="fullname"
          placeholder="ФИО"
          value={formState.fullName}
          onChange={handleChange}
        />
        <input
          type="date"
          name="startDate"
          value={formState.startDate}
          onChange={handleChange}
        />
        <input
          type="date"
          name="endDate"
          value={formState.endDate}
          onChange={handleChange}
        />
        <input
          type="text"
          name="project"
          placeholder="Проект"
          value={formState.project}
          onChange={handleChange}
        />
        <input
          type="text"
          name="telegram"
          placeholder="Telegram"
          value={formState.telegram}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Телефон"
          value={formState.phone}
          onChange={handleChange}
        />
        <button type="submit">Сохранить</button>
        <button type="button" onClick={onClose}>
          Отмена
        </button>
      </form>
    </Modal>
  );
};

export default EditModal;

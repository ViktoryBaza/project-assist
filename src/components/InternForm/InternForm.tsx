import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Intern } from "../../interfaces/types";
import "../InternForm/InternForm.css";

interface InternFormProps {
  isOpen: boolean;
  onClose: () => void;
  intern: Intern | null;
  onSubmit: (intern: Intern) => void;
}

const InternForm: React.FC<InternFormProps> = ({
  isOpen,
  onClose,
  intern,
  onSubmit,
}) => {
  const [formState, setFormState] = useState<Omit<Intern, "id">>({
    fullName: "",
    startDate: "",
    endDate: "",
    project: "",
    telegram: "",
    phone: "",
    stack: "",
    task: "",
    email: "",
    group: "",
  });

  useEffect(() => {
    if (intern) {
      setFormState(intern);
    }
  }, [intern]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newIntern = { id: Date.now(), ...formState };
    onSubmit(newIntern);
    onClose();
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Edit Intern"
      className="modal"
    >
      <form onSubmit={handleSubmit}>
        <div className="form_content">
          <th className="form">ФИО</th>
          <input
            type="text"
            name="fullName"
            placeholder="ФИО"
            value={formState.fullName}
            onChange={handleChange}
          />
          <th className="form">Дата начала стажировки</th>
          <input
            type="text"
            name="startDate"
            placeholder="Начало стажировки"
            value={formState.startDate}
            onChange={handleChange}
          />
          <th className="form">Дата окончания стажировки</th>
          <input
            type="text"
            name="endDate"
            placeholder="Конец стажировки"
            value={formState.endDate}
            onChange={handleChange}
          />
          <th className="form">Проект</th>
          <input
            type="text"
            name="project"
            placeholder="Проект"
            value={formState.project}
            onChange={handleChange}
          />
          <th className="form">Telegram</th>
          <input
            type="text"
            name="telegram"
            placeholder="Telegram"
            value={formState.telegram}
            onChange={handleChange}
          />
          <th className="form">Телефон</th>
          <input
            type="text"
            name="phone"
            placeholder="Телефон"
            value={formState.phone}
            onChange={handleChange}
          />
          <th className="form">Стек</th>
          <input
            type="text"
            name="stack"
            placeholder="Стек"
            value={formState.stack}
            onChange={handleChange}
          />
          <th className="form">Текущее задание</th>
          <input
            type="text"
            name="task"
            placeholder="Текущее задание"
            value={formState.task}
            onChange={handleChange}
          />
          <th className="form">Email</th>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formState.email}
            onChange={handleChange}
          />
          <th className="form">Группа</th>
          <input
            type="text"
            name="group"
            placeholder="Группа"
            value={formState.group}
            onChange={handleChange}
          />
        
        </div>
        <div className="bthContainer">
          <button type="submit" className="btnTableAdd">
            Добавить
          </button>
          <button type="button" onClick={onClose} className="btnTableClose">
            Отменить
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default InternForm;

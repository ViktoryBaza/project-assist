import React, { useState, useEffect } from "react";
import { Intern } from "../interfaces/types";
import AddButton from "../components/Button/AddButton";
import InternForm from "../components/InternForm/InternForm";
import InternTable from "../components/InternTable/InternTable";


const InternTablePage: React.FC = () => {
    const [interns, setInterns] = useState<Intern[]>([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentIntern, setCurrentIntern] = useState<Intern | null>(null);
  
    useEffect(() => {
      const storedInterns = localStorage.getItem("interns");
      if (storedInterns) {
        setInterns(JSON.parse(storedInterns));
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem("interns", JSON.stringify(interns));
    }, [interns]);
  
    const handleSaveIntern = (intern: Intern) => {
      if (currentIntern) {
        // Редактирование существующего стажера
        setInterns(interns.map(i => i.id === currentIntern.id ? { ...intern, id: currentIntern.id } : i));
      } else {
        // Добавление нового стажера
        const newIntern = { ...intern, id: Date.now() };
        setInterns([...interns, newIntern]);
      }
      setModalOpen(false);
      setCurrentIntern(null);
    };
  
    const handleAddIntern = () => {
      setCurrentIntern(null);
      setModalOpen(true); 
    };
  
    const handleEditIntern = (intern: Intern) => {
      setCurrentIntern(intern);
      setModalOpen(true);
    };
  
    const handleDeleteIntern = (id: number) => {
      const updatedInterns = interns.filter((intern) => intern.id !== id);
      setInterns(updatedInterns);
    };
  
    const handleCloseModal = () => {
      setModalOpen(false); 
    };
  
    return (
      <div>
        <AddButton onClick={handleAddIntern} />
        <InternTable interns={interns} onEdit={handleEditIntern} onDelete={handleDeleteIntern} />
      {isModalOpen && (
        <InternForm
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          intern={currentIntern}
          onSubmit={handleSaveIntern}
        />
      )}
    </div>
    );
  };
export default InternTablePage;

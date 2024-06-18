import React, { useState } from "react";
import { Intern } from "../../interfaces/types";
import "../InternTable/InternTable.css";

interface InternTableProps {
  interns: Intern[];
  onEdit: (intern: Intern) => void;
  onDelete: (id: number) => void;
}

const InternTable: React.FC<InternTableProps> = ({
  interns,
  onEdit,
  onDelete,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const sumPage = 5;

  const lastItem = currentPage * sumPage;
  const firstItem = lastItem - sumPage;
  const currentItems = interns.slice(firstItem, lastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const toggle = (id: number) => {
    setOpenMenu(openMenu === id ? null : id);
  };
  return (
    <div className="content">
      <h1>Стажёры</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>№</th>
            <th>ФИО</th>
            <th>Дата начала стажировки</th>
            <th>Дата окончания стажировки</th>
            <th>Проект</th>
            <th>Telegram</th>
            <th>Телефон</th>
            <th>Стек</th>
            <th>Текущее задание</th>
            <th>Email</th>
            <th>Группа</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((intern, index) => (
            <tr key={intern.id}>
              <td>
                <div
                  className="dropbtn dropdown"
                  onClick={() => toggle(intern.id)}
                >
                  ⋮
                  {openMenu === intern.id && (
                    <div className="dropdown-content">
                      <button
                        onClick={() => onEdit(intern)}
                        className="btnTable"
                      >
                        Редактировать
                      </button>
                      <button
                        onClick={() => onDelete(intern.id)}
                        className="btnTable"
                      >
                        Удалить
                      </button>
                    </div>
                  )}
                </div>
              </td>
              <td>{firstItem + index + 1}</td>
              <td>{intern.fullName}</td>
              <td>{intern.startDate}</td>
              <td>{intern.endDate}</td>
              <td>{intern.project}</td>
              <td>{intern.telegram}</td>
              <td>{intern.phone}</td>
              <td>{intern.stack}</td>
              <td>{intern.task}</td>
              <td>{intern.email}</td>
              <td>{intern.group}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => paginate(currentPage - 1)}>«</button>
        <button onClick={() => paginate(currentPage - 1)}> {`<`}</button>
        <button onClick={() => paginate(1)}>1</button>
        <button onClick={() => paginate(currentPage + 1)}>{`>`}</button>
        <button onClick={() => paginate(Math.ceil(interns.length / sumPage))}>
          »
        </button>
      </div>
    </div>
  );
};

export default InternTable;

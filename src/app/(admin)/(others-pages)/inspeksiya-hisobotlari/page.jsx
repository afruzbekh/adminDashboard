import React from 'react';
import PageBreadcrumb from "@/components/common/PageBreadCrumb";

const InspectionReports = () => {
  return (
    <div>
      <PageBreadcrumb pageTitle="Inspeksiya Hisoboti" />
      <div className="bg-white dark:border-gray-800 dark:bg-white/[0.03] overflow-hidden">
        <table className='dark:text-white'>
          <thead>
            <tr>
              <th colSpan="34" className="border border-gray-300 p-2 text-left">
                Инспексиянинг Қишлоқ хўжалигига мўлжалланган ерлардан фойдаланишни назорат қилиш бўлими ҳодимларининг Ўзбекистон Республикаси Президентининг 2024 йил 30 декабрдаги ПҚ-465-сонли қарори бўйича амалга оширилган ишлар тўғрисида
              </th>
            </tr>
            <tr>
              <th colSpan="34" className="border border-gray-300 p-2 text-left">
                М А Ъ Л У М О Т
              </th>
            </tr>
            <tr>
              <th className="border border-gray-300 p-2 text-left">№</th>
              <th className="border border-gray-300 p-2 text-left">худуд номи</th>
              <th className="border border-gray-300 p-2 text-left">Ҳодимнинг Ф.И.Ш</th>
              <th className="border border-gray-300 p-2 text-left">cоҳа йўналишлари номи</th>
              <th className="border border-gray-300 p-2 text-left">назорат йўналиш номи</th>
              <th colSpan="4" className="border border-gray-300 p-2 text-left">Назорат объектлари</th>
              <th className="border border-gray-300 p-2 text-left">дала четиларига экин режалаштирилган ер майдони (га)</th>
              <th className="border border-gray-300 p-2 text-left">Ишчи гурух томонидан тақдим этилган хужжатларга асосан аниқланган ҳолат</th>
              <th colSpan="4" className="border border-gray-300 p-2 text-left">Ўрганиш жараёнида аниқланган дала четларига экин экмаган ва маҳсулот етиштирмаганлик ҳолатлари</th>
              <th className="border border-gray-300 p-2 text-left">текширишлар сони</th>
              <th className="border border-gray-300 p-2 text-left">шундан</th>
              <th colSpan="6" className="border border-gray-300 p-2 text-left">Текшириш натижаси бўйича ваколат доирасида кўрилган чоралар</th>
              <th className="border border-gray-300 p-2 text-left">Қўлланилган маъмурий жарима суммаси (минг.сўм)</th>
              <th className="border border-gray-300 p-2 text-left">Ундирилган жарима суммаси</th>
              <th className="border border-gray-300 p-2 text-left">Шундан</th>
              <th className="border border-gray-300 p-2 text-left">Ундирилмасдан қолган жарималар</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(12)].map((_, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{index + 1}</td>
                <td className="border border-gray-300 p-2">Амударё т.</td>
                <td className="border border-gray-300 p-2">ERDOSHEV AKROMJON RUSTAM O‘G‘LI</td>
                <td className="border border-gray-300 p-2">Ер назорати</td>
                <td className="border border-gray-300 p-2">Дала чети ерларидан фойдаланиш</td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InspectionReports;

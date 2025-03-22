import React from 'react';
import PageBreadcrumb from "@/components/common/PageBreadCrumb";

const InspectionReports = () => {
  return (
    <div>
      <PageBreadcrumb pageTitle="Inspeksiya Hisoboti" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[930px] text-center">
          <div className="w-full overflow-x-auto"> {/* Added wrapper */}
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th colSpan="34" className="border border-gray-300 p-2 text-left bg-gray-100">
                    Инспексиянинг Қишлоқ хўжалигига мўлжалланган ерлардан фойдаланишни назорат қилиш бўлими ҳодимларининг Ўзбекистон Республикаси Президентининг 2024 йил 30 декабрдаги ПҚ-465-сонли қарори бўйича амалга оширилган ишлар тўғрисида
                  </th>
                </tr>
                <tr>
                  <th colSpan="34" className="border border-gray-300 p-2 text-left bg-gray-100">
                    М А Ъ Л У М О Т
                  </th>
                </tr>
                <tr>
                  <th className="border border-gray-300 p-2 text-left bg-gray-100">№</th>
                  <th className="border border-gray-300 p-2 text-left bg-gray-100">худуд номи</th>
                  <th className="border border-gray-300 p-2 text-left bg-gray-100">Ҳодимнинг Ф.И.Ш</th>
                  <th className="border border-gray-300 p-2 text-left bg-gray-100">cоҳа йўналишлари номи</th>
                  <th className="border border-gray-300 p-2 text-left bg-gray-100">назорат йўналиш номи</th>
                  <th colSpan="4" className="border border-gray-300 p-2 text-left bg-gray-100">Назорат объектлари</th>
                  <th className="border border-gray-300 p-2 text-left bg-gray-100">дала четиларига экин режалаштирилган ер майдони (га)</th>
                  <th className="border border-gray-300 p-2 text-left bg-gray-100">Ишчи гурух томонидан тақдим этилган хужжатларга асосан аниқланган ҳолат</th>
                  <th colSpan="4" className="border border-gray-300 p-2 text-left bg-gray-100">Ўрганиш жараёнида аниқланган дала четларига экин экмаган ва маҳсулот етиштирмаганлик ҳолатлари</th>
                  <th className="border border-gray-300 p-2 text-left bg-gray-100">текширишлар сони</th>
                  <th className="border border-gray-300 p-2 text-left bg-gray-100">шундан</th>
                  <th colSpan="6" className="border border-gray-300 p-2 text-left bg-gray-100">Текшириш натижаси бўйича ваколат доирасида кўрилган чоралар</th>
                  <th className="border border-gray-300 p-2 text-left bg-gray-100">Қўлланилган маъмурий жарима суммаси (минг.сўм)</th>
                  <th className="border border-gray-300 p-2 text-left bg-gray-100">Ундирилган жарима суммаси</th>
                  <th className="border border-gray-300 p-2 text-left bg-gray-100">Шундан</th>
                  <th className="border border-gray-300 p-2 text-left bg-gray-100">Ундирилмасдан қолган жарималар</th>
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
          </div> {/* Closed wrapper */}
        </div>
      </div>
    </div>
  );
};

export default InspectionReports;

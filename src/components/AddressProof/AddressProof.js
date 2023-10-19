import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdharProofsAction } from "../../redux/slices/hr-letters/adhar-proof";

const AddressProof = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdharProofsAction());
  }, []);

  const pdfobj = useSelector((state) => state.pdf);
  const { pdfs } = pdfobj;

  const downloadSinglePDF = (pdfData, index) => {
    const pdfBlob = new Blob([pdfData.adharPdf], { type: "application/pdf" });
    const pdfUrl = URL.createObjectURL(pdfBlob);
    console.log(pdfData.adharPdf);

    const downloadLink = document.createElement("a");
    downloadLink.href = pdfUrl;
    downloadLink.download = `pdf_${index}.pdf`; // Set the filename for the download

    // Programmatically trigger the download
    downloadLink.click();
  };

  console.log(pdfs);

  return (
    <div>
      {pdfs?.map((pdf, index) => (
        <div key={pdf._id}>
          <p>PDF {index + 1}</p>
          <button onClick={() => downloadSinglePDF(pdf, index)}>
            Download PDF {index + 1}
          </button>
        </div>
      ))}
    </div>
  );
};

export default AddressProof;

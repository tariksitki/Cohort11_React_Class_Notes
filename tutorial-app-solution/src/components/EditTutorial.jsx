//? https://reactjs.org/docs/hooks-reference.html#usestate
//! State degiskeninin degeri, 1.render ile initialState
//! parametresinin ilk degerini alir. Dolayisiyle bu durumda
//! prop'tan gelen ilk deger state'e aktarilir.
//! Sonradan degisen props degerleri useState'e aktarilmaz.
//! Eger props'tan gelen degerleri her degisimde useState'e
//! aktarmak istersek useEffect hook'unu componentDidUpdate
//! gibi kullanabiriz.

// controlled uncontrolled hatasi icin  value={title || ""}
// bir inputun degeri undefined olmamali. react uyari verir.

import React, { useEffect, useState } from "react";

// modal js tabanli calisir. yani bir tusa tiklaninca acilir.

const EditTutorial = ({ updateTutorial, editItem }) => {
  const { id, title: newTitle, description } = editItem; // isim degisikligi

  const [title, setTitle] = useState(newTitle);
  const [desc, setDesc] = useState(description);
  // propsla gelen eski degerleri initial yaptik.
  // Önemli:  During the initial render, the returned state (state) is the same as the value passed as the first argument (initialState).The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component. Yani normalde edit butonuna basmadigimiz sürece title isimli state in ici bos. Bu nedenle useState ilk render esnasinda bos return eder. Bu nedenle useEffect kulanmak zorundayiz ve böylece iki state imizde degisiklik oldugunda, edit icin kullandigimiz modal de verilerimizin instance olarak cikmasini sagliyoruz.
  // bir state i miz var ve bu state degerini props dan aliyor.

  // bu kez formun submit özelligini kullanmayacagiz kendimiz button a özellik verdik
  const handleSave = (e) => {
    e.preventDefault();
    updateTutorial(id, title, desc);
    setTitle("");
    setDesc("");
    /// sayfayi hard olarak güncelleme:
    // window.reload()
  };

    // üst component da newtitle ve desc her degistiginde biz buradaki locak state imizi güncelliyoruz.
  useEffect(() => {
    setTitle(newTitle);
    setDesc(description);
  }, [newTitle, description]);

  return (
    <div>
      <div className="modal" tabIndex="-1" id="edit-modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* modal in body kismi. aslinda form ayri bir component yapilip burada cagirilmasi gerekirdi */}
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Enter your title"
                  value={title || ""}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="desc" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="desc"
                  placeholder="Enter your Description"
                  value={desc || ""}
                  onChange={(e) => setDesc(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              {/* <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button> */}
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSave}
                data-bs-dismiss="modal" // onclick altinda olmali
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;

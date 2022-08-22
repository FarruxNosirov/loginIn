import React, { useState } from "react";
import "./Registr.css";
import { GrBottomCorner } from "react-icons/gr";

const Registr = () => {
  const [active, setActive] = useState({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
  });
  const [confirmPass, setConfirmPass] = useState(true);
  const [data, setData] = useState({ FirstName: "", Numbir: "", Name: "" });

  const handeChang = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    let input = document.querySelector(".input");
    e.preventDefault();
    if (!data.FirstName) {
      setConfirmPass(false);
      input.classList.add("error_border");
    }
  };
  return (
    <div className="Registr">
      <div className="container">
        <div className="Registr_container">
          <div className="registr_header">
            <h2>Ro'yxatdan O'tish</h2>
            <p>
              Akkountingiz bormi ? <a href="">Kiring</a>
            </p>
          </div>
          <form className="form_conatiner" action="">
            <div className="form_content">
              <div className="form_content_box">
                <div className="box_1">
                  <div className="items">
                    <div className="item_flex">
                      <div className="w_full">
                        <div className="w_full_tile">
                          <span>Sizning F.I.SH.</span>
                        </div>
                        <div className="w_full_input">
                          <input
                            className="input "
                            type="text"
                            name="FirstName"
                            placeholder="Sizning F.I.SH."
                            onChange={handeChang}
                          />
                          <div className="icon">
                            <GrBottomCorner className="icon_gr" />
                          </div>
                        </div>
                        <div
                          className="error"
                          style={{ display: confirmPass ? "none " : "flex" }}
                        >
                          <span>Ushbu maydon to'ldirilishi shart</span>
                        </div>
                      </div>
                      <div className="w_full">
                        <div className="w_full_tile">
                          <span>Sizning telifon raqamingiz</span>
                        </div>
                        <div className="item_flex ">
                          <div className="one">
                            <span>+998</span>
                          </div>
                          <div className="two">
                            <input
                              type="numbir"
                              name="Numbir"
                              placeholder="(90) 999-99-99"
                              onChange={handeChang}
                            />
                          </div>
                        </div>
                        <div
                          className="error"
                          style={{ display: confirmPass ? "none " : "flex" }}
                        >
                          <span>Ushbu maydon to'ldirilishi shart</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="items">
                    <div className="w_full">
                      <div className="w_full_tile">
                        <span>Do'konning nomi</span>
                      </div>
                      <div className="w_full_input">
                        <input
                          className="input"
                          type="text"
                          placeholder="Do'konning nomi kiriting"
                          name="Name"
                          onChange={handeChang}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="items">
                    <div className="item_flex">
                      <div className="w_full">
                        <div className="w_full_tile">
                          <span>Yuridik shaxs turi</span>
                        </div>
                        <div className="w_full_input">
                          <div
                            onClick={() =>
                              setActive({ modal1: !active.modal1 })
                            }
                            className="input input_btn"
                          >
                            <div>
                              <span>MCHJ: Masuliyati Cheklangan Jamiyat</span>
                            </div>
                            <div>
                              <GrBottomCorner />
                            </div>
                          </div>
                          <div
                            className={`lest ${active.modal1 ? "acteve" : ""}`}
                          >
                            <ul>
                              <li>MCHJ: Masuliyati Cheklangan Jamiyat</li>
                              <li>YaTT: Yakka Tartibdagi Tadbirkor</li>
                              <li>XK: Xorijiy Korxona</li>
                              <li>UK: Unitar Karxona</li>
                              <li>DUK: Davlat Unitar Korxonasi</li>
                              <li>XK: Xususiy Korxona</li>
                              <li>OK: Oilaviy Korxona</li>
                              <li>IChK: Ishlab Chiqarish Kooperativ</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="w_full">
                        <div className="w_full_tile">
                          <span>Yuridik shaxs turi</span>
                        </div>
                        <div className="w_full_input">
                          <input
                            type="text"
                            className="input"
                            placeholder="Aliftech"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="items">
                    <div className="item_flex">
                      <div className="w_full">
                        <div className="w_full_tile">
                          <span>Viloyat</span>
                        </div>
                        <div className="w_full_input">
                          <div
                            onClick={() => {
                              setActive({ modal2: !active.modal2 });
                            }}
                            className="input input_btn"
                          >
                            <div>
                              <span>O'z viloyatingizni tanlang</span>
                            </div>
                            <div>
                              <GrBottomCorner />
                            </div>
                          </div>
                          <div
                            className={`lest ${active.modal2 ? "acteve" : ""}`}
                          >
                            <ul>
                              <li>Toshkent</li>
                              <li>Samarqand</li>
                              <li>XK: Xorijiy Korxona</li>
                              <li>UK: Unitar Karxona</li>
                              <li>DUK: Davlat Unitar Korxonasi</li>
                              <li>XK: Xususiy Korxona</li>
                              <li>OK: Oilaviy Korxona</li>
                              <li>IChK: Ishlab Chiqarish Kooperativ</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="w_full">
                        <div className="w_full_tile">
                          <span>Tuman</span>
                        </div>
                        <div className="w_full_input">
                          <div
                            onClick={() => {
                              setActive({ modal3: !active.modal3 });
                            }}
                            className="input input_btn"
                          >
                            <div>
                              <span>O'z tumaningizni tanlang</span>
                            </div>
                            <div>
                              <GrBottomCorner />
                            </div>
                          </div>
                          <div
                            className={`lest ${active.modal3 ? "acteve" : ""}`}
                          >
                            <ul>
                              <li>Toshkent</li>
                              <li>Samarqand</li>
                              <li>XK: Xorijiy Korxona</li>
                              <li>UK: Unitar Karxona</li>
                              <li>DUK: Davlat Unitar Korxonasi</li>
                              <li>XK: Xususiy Korxona</li>
                              <li>OK: Oilaviy Korxona</li>
                              <li>IChK: Ishlab Chiqarish Kooperativ</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="items">
                    <div className="w_full">
                      <div className="w_full_tile">
                        <span>Do'konning nomi</span>
                      </div>
                      <div className="w_full_input">
                        <div
                          onClick={() => {
                            setActive({ modal4: !active.modal4 });
                          }}
                          className="input input_btn"
                        >
                          <div>
                            <span>O'z tumaningizni tanlang</span>
                          </div>
                          <div>
                            <GrBottomCorner />
                          </div>
                        </div>
                        <div
                          className={`lest ${active.modal4 ? "acteve" : ""}`}
                        >
                          <ul>
                            <li>Toshkent</li>
                            <li>Samarqand</li>
                            <li>XK: Xorijiy Korxona</li>
                            <li>UK: Unitar Karxona</li>
                            <li>DUK: Davlat Unitar Korxonasi</li>
                            <li>XK: Xususiy Korxona</li>
                            <li>OK: Oilaviy Korxona</li>
                            <li>IChK: Ishlab Chiqarish Kooperativ</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="items">
                    <div className="w_full">
                      <div className="w_full_tile">
                        <span>Taxminiy savdo ko'rsatkichi (oyiga, so'm)</span>
                      </div>
                      <div className="w_full_input">
                        <input
                          className="input"
                          type="text"
                          placeholder="23 000 000"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form_content_btn">
                <div className="btn_content">
                  <button className="btn btn_1">Orqaga</button>
                  <div onClick={handleSubmit} className="btn btn_2">
                    Yakunlash
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registr;

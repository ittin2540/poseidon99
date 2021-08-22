import React from 'react';
import { Container } from 'react-bootstrap';

function casino() {
    return (
        <div className="bg-image">
            <Container>
                <div className="row pb-5 m-0">
                    <div className="col-md-12">
                        <div style={{ textAlign: "center" }}>
                            <h1 className="text-neno-titel pt-5">
                                คาสิโนออนไลน์
                            </h1>
                        </div>
                        <div style={{ textAlign: "justify" }}>
                            <p style={{ color: "beige" }}>
                                หากท่านต้องการเสี่ยงโชคกับบาคาร่าเรามีเว็บบาคาร่าออนไลน์ มากมายหลากหลายค่าย ให้ท่านได้เลือกเล่นได้มากมาย ร่วมทั้งมีเซ็กซี่บาคาร่ากับการไลฟ์สดเปิดไพ่ของสาวๆ ในชุดบิกินี่เล่นบาคาร่าพร้อมกับการดูสาวไปเพลินๆเลยนะคะ เล่นบาคาร่าจากไลฟ์สดกันเลยบาคาร่า เซ็กซี่บาคาร่า
                            </p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="text-neno-titel" style={{ textAlign: "center" }}>
                            <h5>ตัวอย่างการไลฟ์สดเซ็กซี่บาคาร่า</h5>
                        </div>
                        <img src="image/sexy.png" alt="Avater" style={{ objectFit: "cover", filter: "drop-shadow(rgb(0, 0, 0) 0px 10px 30px)" }} width="100%" height="auto" />
                    </div>
                    <div className="col-md-12 pt-5">
                        <div className="text-neno-titel" style={{ textAlign: "center" }}>
                            <h5>ตัวอย่างการไลฟ์สดบาคาร่า</h5>
                        </div>
                        <img src="image/bacara.jpg" alt="Avater" style={{ objectFit: "cover", filter: "drop-shadow(rgb(0, 0, 0) 0px 10px 30px)" }} width="100%" height="auto" />
                    </div>
                    <div className="col-md-12 pt-5" style={{ textAlign: "justify" }}>
                        <p style={{ color: "beige" }}>
                            การเล่นบาคาร่าออนไลน์ นั้นไม่มีการโกงอย่างแน่นอน เนื่องจากเป็นการถ่ายทอดสดจากโต๊ะบาคาร่าจริงจากต่างประเทศ เล่นกันสดๆ ได้ประสบเหมือนเล่นจริงที่คาสิโนเลยก็ว่าได้ อย่ารอช้าทำไมสมัครได้เลยที่
                        </p>
                    </div>
                    <div className="col-md-12">
                        <div className="text-neno-titel" style={{ textAlign: "center" }}>
                            <h5>รวมเว็บคาสิโนสด</h5>
                        </div>
                        <img src="image/casino.png" alt="Avater" style={{ objectFit: "cover", filter: "drop-shadow(rgb(0, 0, 0) 0px 10px 30px)" }} width="100%" height="auto" />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default casino;
import React from 'react';
import Iframe from 'react-iframe';

function about() {
    return (
        <div className="a-bg">
            <div className="container pb-4">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="row m-0 p-0">
                            <div className="col-4">
                                <img className="h-bg" src="image/a-01.png" alt="team meeting" />
                            </div>
                            <div className="col-4">
                                <img className="h-bg" src="image/a-02.png" alt="team meeting" />
                            </div>
                            <div className="col-4">
                                <img className="h-bg" src="image/a-03.png" alt="team meeting" />
                            </div>
                        </div>
                        <div className="row m-0 p-0">
                            <div className="col-12">
                                <img className="h-bg" src="image/poseidon.webp" alt="team meeting" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row m-0 p-0">
                            <div className="col-12">
                                <Iframe src="https://www.youtube.com/embed/lh-4OTtC5_o"
                                    width="100%"
                                    height="300px"
                                    id="myId"
                                    className="myClassname a-card"
                                    display="initial"
                                    position="relative" />
                            </div>
                        </div>
                        <div className="row m-0 p-0">
                            <div className="col-12" style={{paddingTop:"2rem"}}>
                                <div className="a-bg-t a-card">
                                    <div className="p-4">
                                        <p>UFAPOSEIDON99 บริการ คาสิโน บาคาร่า <br />
                                            อย่างเต็มรูปแบบ เว็บตรงที่จะให้คุณสนุกไปกับ<br />
                                            การเล่นโดนไม่มีขีดจำกัดได้ในยูสเซอร์เดียว ไม่ว่า<br />
                                            จะเป็นบาคาล่าออนไลน์ รูเล็ต ไฮโล เสือมังกร <br />
                                            หรือสล็อต สาวสวยเซ็กซี่พร้อมดูแลและให้<br />
                                            บริการคุณ 24 ชั่วโมง</p>
                                        <p>ระบบฝากออโต้ที่ดีที่สุด ถอนสูงสุดวันละ <br />
                                            2 ล้าน แทงสูงสุดไม้ละ 200,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default about;
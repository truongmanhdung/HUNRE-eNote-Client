import React from 'react'
import PropTypes from 'prop-types'

function Attendance(props) {
    const arrayList = [
        {
            name: 'Quản trị doanh nghiệp'
        },
        {
            name: 'Toán cao cấp'
        }
    ]  

    const hocki = [
        {
            name: '1',
        },
        {
            name: '2'
        }
    ]

    const buttonName = [
        {
            name: 'Print',
        },
        {
            name: 'Copy',
        },
        {
            name: 'Exel',
        },
        {
            name: 'CSV',
        },
        {
            name: 'PDF',
        },
    ] 

    const detail = [
        {
            date: '20/9/2021',
            Ca: 1,
            ngDiemDanh: '',
            moTa: 'remote',
            status: 'Asume present',
            note: '',
        },
        {
            date: '20/9/2021',
            Ca: 1,
            ngDiemDanh: '',
            moTa: 'remote',
            status: 'Asume present',
            note: '',
        },
        {
            date: '20/9/2021',
            Ca: 1,
            ngDiemDanh: '',
            moTa: 'remote',
            status: 'Asume present',
            note: '',
        },
        {
            date: '20/9/2021',
            Ca: 1,
            ngDiemDanh: '',
            moTa: 'remote',
            status: 'Asume present',
            note: '',
        },
        {
            date: '20/9/2021',
            Ca: 1,
            ngDiemDanh: '',
            moTa: 'remote',
            status: 'Asume present',
            note: '',
        },
    ]

    return (
        <div>
            <div>Học Kỳ</div>
            <div>
                <select>
                    {hocki.map((item) => (
                        <option value="mango"> Học kỳ {item.name}</option>
                    ))}
                </select>
                <div>Lựa chọn học kỳ để hiện chi tiết điểm danh</div>
            </div>
            {arrayList.map((item, index) => {
                return (
                    <div>
                        <div>{item.name}</div>
                        {buttonName.map((item, index) => (
                            <button>{item.name}</button>
                        ))}
                        <div>
                            <table>
                                <tr>
                                    <td>Bài học</td>
                                    <td>Ngày</td>
                                    <td>Ca</td>
                                    <td>Người điểm danh</td>
                                    <td>Mô tả</td>
                                    <td>Trạng thái đi học</td>
                                    <td>Ghi chú</td>
                                </tr>
                                {detail.map((item, index) => (
                                    <tr>
                                        <td>index + 1</td>
                                        <td>{item.date}</td>
                                        <td>{item.Ca}</td>
                                        <td>{item.ngDiemDanh}</td>
                                        <td>{item.moTa}</td>
                                        <td>{item.status}</td>
                                        <td>{item.note}</td>
                                    </tr>
                                ))}
                            </table>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

Notification.propTypes = {

}

export default Attendance;


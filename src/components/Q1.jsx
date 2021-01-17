import _ from 'lodash'

function Q1(props) {
  const manipulateData = (arr) => {
    const sorted = _.sortBy(arr)
    const uniq = _.uniq(sorted)
    const filterBetween = uniq.filter((item) => item >= 100 && item <= 500)
    const filterCondition = filterBetween.filter(
      (item) => item % 3 === 0 || item % 5 === 0,
    )
    return filterCondition
  }

  return (
    <>
      <div className="problem">
        <div className="quote">
          https://oclmyk0vd0.execute-api.us-east-1.amazonaws.com/codecamp7/q1?token=xxxxx
        </div>
        1. โจทย์ ดึงข้อมูลชุดตัวเลขจาก API : q1 แล้ว process ดังนี้
        <ul>
          <li>เรียงลำดับ จากน้อยไปมาก</li>
          <li>เอาตัวเลขเฉพาะ between 100 - 500 (รวมตัวเลข 100, 500ด้วย)</li>
          <li>เอาตัวเลขเฉพาะ หารด้วย แม่3 หรือ แม่5 ลงตัว</li>
          <li>
            แสดงเฉพาะเลขที่ unique (ไม่ต้องแสดงเลขซ้ำ เช่น 9 สี่ตัว ให้แสดงแค่
            9ตัวเดียว)
          </li>
        </ul>
        <div className="query">q1 : [ {props.data.join(', ')} ]</div>
        <div className="result">
          result : [ {manipulateData(props.data).join(', ')} ]
        </div>
      </div>
    </>
  )
}

export default Q1

import _ from 'lodash'

function Q3(props) {
  const manipulateData = (arr) => {
    const result = _(arr)
      .filter((item) => item.member !== null) //not include member:null
      .groupBy('member.name')
      .map((items, key) => ({ [key]: _.sumBy(items, 'grandTotal') }))
      .value()
    return result
  }

  return (
    <>
      <div className="problem">
        <div className="quote">
          https://oclmyk0vd0.execute-api.us-east-1.amazonaws.com/codecamp7/q3?token=xxxxx
        </div>
        3. โจยท์ ดึงข้อมูลธุรกรรมการขาย API : q3 แล้ว process ดังนี้
        (ข้อมูลโครงสร้างเดียวกับข้อ2)
        <ul>
          <li>รวมยอดขายของสมาชิกแต่ละคนโดยชื่อ member.name</li>
        </ul>
        <div>
          <div className="query">
            q3 :
            <br />
            {props.data.map((item, key) => (
              <div key={key}>
                {item.member
                  ? `{
                  ._id : ${item._id},
                  businessDate : ${item.businessDate},
                  grandTotal : ${item.grandTotal},
                  location : ${item.location},
                  paymentType : ${item.paymentType},
                  member : {
                    name: ${item.member.name},
                    gainPoints: ${item.member.gainPoints},
                  }
              }`
                  : `{
                ._id : ${item._id},
                businessDate : ${item.businessDate},
                grandTotal : ${item.grandTotal},
                location : ${item.location},
                paymentType : ${item.paymentType},
                member : ${item.member},
            }`}
              </div>
            ))}
          </div>
          <div className="result">
            result :
            <br />
            {manipulateData(props.data).map((item) => (
              <span key={Object.keys(item)}>
                {`${Object.keys(item)} : ${Object.values(item)}`}
                <br />
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Q3

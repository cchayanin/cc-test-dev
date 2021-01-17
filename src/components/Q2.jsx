import _ from 'lodash'
import { span } from 'prelude-ls'

function Q2(props) {
  const manipulateData = (arr) => {
    const result = _(arr)
      .groupBy('location')
      .map((items, key) => ({
        [key]: _.sumBy(items, 'grandTotal'),
      }))
      .value()
    return result
  }

  return (
    <>
      <div className="problem">
        <div className="quote">
          https://oclmyk0vd0.execute-api.us-east-1.amazonaws.com/codecamp7/q2?token=xxxxx
        </div>
        2. โจทย์ ดึงข้อมูลธุรกรรมการขาย API : q2 แล้ว process ดังนี้
        <ul>
          <li>รวมยอดขายของแต่ละภาค location</li>
        </ul>
        <div>
          <div className="query">
            q2 :
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

export default Q2

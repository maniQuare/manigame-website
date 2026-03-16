
import Card from "../components/Card";

export default function Page() {
  return (
    <div className="container">

      

      <div className="banner">
        AGAR SODA LAGAI KARNE PR APKE PROFIT KE SAUDE REMOVE KR DIY
      </div>

      <h2 className="pageTitle">Home</h2>

      <div className="cards">

        <Card title="MY USERNAME" value="Raju" subValue="SA5088" />

        <Card title="MY LEVEL" value="Agent" />

        <Card title="Current Balance" value="1000" />

        <Card title="Profit/Loss" value="0" />

      </div>

    </div>
  );
}
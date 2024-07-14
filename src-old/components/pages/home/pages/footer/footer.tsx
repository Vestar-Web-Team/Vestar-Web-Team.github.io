import Page from "../../../../screen-scroll/page";

export default function Footer() {


  return <Page className="h-64 bg-primary-950 border-t-2 border-secondary">
    <div className="grid grid-flow-row grid-cols-3 gap-12 p-14">
      <div>
        <a href="https://beian.miit.gov.cn/" target="_blank">备案号：{process.env.RECORD_NUMBER}</a>
      </div>

      <div></div>

      <div></div>
    </div>
  </Page>;
}
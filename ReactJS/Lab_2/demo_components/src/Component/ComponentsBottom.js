import React from "react";

function ComponentsBottom({ dataApp3, dataApp4 }) {
  // //
  // let dataApp3 = props.dataApp3;
  // let dataApp4 = props.dataApp4;

  // let { dataApp3, dataApp4 } = props;
  console.log(`dataApp3 ${dataApp3}`);
  console.log(`dataApp4 ${dataApp4}`);

  return (
    <>
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">{dataApp4}</h3>
            </div>
            <div className="panel-body">
              <textarea className="form-control" rows="3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComponentsBottom;

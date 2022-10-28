function AboutMe(props) {
  return (
    <>
      <div className="container">
        <div className="lead my-5">
          Agenda for this project is to gets hands on with :
        </div>
        <table className="table table-success table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Topic</th>
              <th scope="col">Acceptance Criteria</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Redux</td>
              <td>
                Try to use RTK to implement store. Fetch movies from IMDB etc
              </td>
              <td>Pending</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Search</td>
              <td>Implement type ahead search for the movies.</td>
              <td>Pending</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>React lineage</td>
              <td>Try to use react lineage and implement full screen modal</td>
              <td>Pending</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>AD Grid</td>
              <td>Implement AG Grid with client & server side query.</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AboutMe;

import Breadcrump from "../components/common/Breadcrump";
import PageLayout from "../components/common/PageLayout";
import { FaPodcast } from "react-icons/fa";

const About = () => {
  let profile;
  let pageTitle = "About";
  return (
    <PageLayout pageTitle={`${pageTitle} Us`}>
      <Breadcrump page={`${pageTitle} Us`}>
        <h1 className="text-light fw-bolder my-0 p-1 fs-1">
          {pageTitle} <span className="text-warning">Us</span>
        </h1>
      </Breadcrump>
      <section id="about__page">
        <div className="container">
          <div className="row my-3 d-flex align-items-stretch">
            <div className="col-lg-4 col-md-6">
              <div className="about__desc bg-white rounded shadow-sm p-1 mb-2 d-flex gap-1 align-items-start">
                <div>
                  <p
                    style={{ padding: "4px", background: "#eae8f6" }}
                    title="About Me"
                    className="rounded-circle shadow border-2 border btn btn-md btn-outline-primary"
                  >
                    <FaPodcast />
                  </p>
                </div>
                <p className="lead " style={{ lineHeight: 2 }}>
                  Samuel Ayinde holds a PhD in mechanical engineering from the
                  University of Michigan, Ann Arbor and a Graduate Certificate
                  in counseling from the RCCGNA Seminary, Greenville, Texas,
                  United States. He graduated with a First Class grade in Wood
                  Products Engineering and as the best graduating student of the
                  department of Agricultural and Environmental Engineering,
                  University of Ibadan, Nigeria.
                </p>
              </div>
              <div className="about__desc bg-white rounded shadow-sm p-1 mb-2 d-flex gap-1 align-items-start">
                <div>
                  <p
                    style={{ padding: "4px", background: "#eae8f6" }}
                    title="About Me"
                    className="rounded-circle shadow border-2 border btn btn-md btn-outline-primary"
                  >
                    <FaPodcast />
                  </p>
                </div>
                <p className="lead " style={{ lineHeight: 2 }}>
                  He is ordained and serving as an assistant pastor with the
                  Redeemed Christian Church of God.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="about__image position-relative">
                <img
                  src={profile}
                  alt="profile image"
                  className="img-thumbnail rounded-pill"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="about__desc bg-white rounded shadow-sm p-1 mb-2 d-flex gap-1 align-items-start">
                <div>
                  <p
                    style={{ padding: "4px", background: "#eae8f6" }}
                    title="About Me"
                    className="rounded-circle shadow border-2 border btn btn-md btn-outline-primary"
                  >
                    <FaPodcast />
                  </p>
                </div>
                <p className="lead " style={{ lineHeight: 2 }}>
                  Samuel Ayinde has authored a couple of books including Let the
                  Lord be Magnified, Attaining Academic Excellence, Make Your
                  Life Count for God, Set An Example, Exploring the
                  Multidimensional Mercies of God, Let us dive into the Word,
                  Volume 1, Secret Canons for Academic Excellence, Secret
                  Treasures for Purpose Fulfillment, Volume 1-9, Hymns and
                  Spiritual Songs, Volume 1 and Revival Songs, Volume 1-2.
                </p>
              </div>
              <div className="about__desc bg-white rounded shadow-sm p-1 mb-2 d-flex gap-1 align-items-start">
                <div>
                  <p
                    style={{ padding: "4px", background: "#eae8f6" }}
                    title="About Me"
                    className="rounded-circle shadow border-2 border btn btn-md btn-outline-primary"
                  >
                    <FaPodcast />
                  </p>
                </div>
                <p className="lead " style={{ lineHeight: 2 }}>
                  He is passionate about people discovering, understanding, and
                  fulfilling the purposes of God for their lives, with eternity
                  in view.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;

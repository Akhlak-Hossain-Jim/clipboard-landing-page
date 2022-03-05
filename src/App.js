import { StyleCon } from "./Style";
// import "./style.scss";

export default function App() {
  return (
    <StyleCon>
      <header>
        <img src="/images/logo.svg" alt="logo" />
      </header>
      <main>
        <section className="downloads">
          <h1 className="title_one pad">A history of everything you copy</h1>
          <p className="details_one">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
          <div className="buttons">
            <div className="button">Download for iOS</div>
            <div className="button">Download for Mac</div>
          </div>
        </section>

        <section>
          <h2 className="title_two pad">Keep track of your snippets</h2>
          <p className="details_two">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </section>

        <section className="section_web">
          <div className="section_web__element">
            <img src="/images/image-computer.png" alt="iMac" />
          </div>
          <div className="section_web__element">
            <div className="section_web__element_option">
              <div className="section_web__element_option__title">
                Quick Search
              </div>
              <div className="section_web__element_option__details">
                Easily search your snippets by content, category, web address,
                application, and more.
              </div>
            </div>
            <div className="section_web__element_option">
              <div className="section_web__element_option__title">
                iCloud Sync
              </div>
              <div className="section_web__element_option__details">
                Instantly saves and syncs snippets across all your devices.
              </div>
            </div>
            <div className="section_web__element_option">
              <div className="section_web__element_option__title">
                Complete History
              </div>
              <div className="section_web__element_option__details">
                Retrieve any snippets from the first moment you started using
                the app.
              </div>
            </div>
          </div>
        </section>

        <section className="section_tab">
          <h2 className="title_two">Access Clipboard anywhere</h2>
          <p className="details_two">
            Whether you’re on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>
          <img src="/images/image-devices.png" alt="tab" />
        </section>

        <section className="section_overflow">
          <h2 className="title_two">Supercharge your workflow</h2>
          <p className="details_two">
            We’ve got the tools to boost your productivity.
          </p>
          <div className="section_overflow__options">
            <div className="section_overflow__option">
              <img
                src="/images/icon-blacklist.svg"
                alt="blacklist"
                className="section_overflow__option_img"
              />
              <div className="section_overflow__option_title">
                Create blacklists
              </div>
              <div className="section_overflow__option_details">
                Ensure sensitive information never makes its way to your
                clipboard by excluding certain sources.
              </div>
            </div>
            <div className="section_overflow__option">
              <img
                src="/images/icon-text.svg"
                alt="text"
                className="section_overflow__option_img"
              />
              <div className="section_overflow__option_title">
                Plain text snippets
              </div>
              <div className="section_overflow__option_details">
                Remove unwanted formatting form copied text for a consistent
                look.
              </div>
            </div>
            <div className="section_overflow__option">
              <img
                src="/images/icon-preview.svg"
                alt="preview"
                className="section_overflow__option_img"
              />
              <div className="section_overflow__option_title">
                Sneak preview
              </div>
              <div className="section_overflow__option_details">
                Quick preview of all snippets on your Clipboard for easy access.
              </div>
            </div>
          </div>
        </section>
        <section className="section_companies">
          <img src="/images/logo-google.png" alt="" />
          <img src="/images/logo-ibm.png" alt="" />
          <img src="/images/logo-microsoft.png" alt="" />
          <img src="/images/logo-hp.png" alt="" />
          <img src="/images/logo-vector-graphics.png" alt="" />
        </section>

        <section className="downloads">
          <h1 className="title_one">Clipboard for iOS and Mac OS</h1>
          <p className="details_one">
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you’re ready to start addingto your clipboard.
          </p>
          <div className="buttons">
            <div className="button">Download for iOS</div>
            <div className="button">Download for Mac</div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer">
          <div className="footer_element">
            <img className="logo" src="/images/logo.svg" alt="logo" />
          </div>
          <div className="footer_element">
            <div className="footer_element__link">FAQs</div>
            <div className="footer_element__link">Privacy Policy</div>
            <div className="footer_element__link">Install Guide</div>
            <div className="footer_element__link">Contact Us</div>
            <div className="footer_element__link">Press Kit</div>
          </div>
          <div className="footer_element">
            <img src="/images/icon-facebook.svg" alt="facebook" />
            <img src="/images/icon-twitter.svg" alt="twitter" />
            <img src="/images/icon-instagram.svg" alt="instagram" />
          </div>
        </div>
      </footer>
    </StyleCon>
  );
}

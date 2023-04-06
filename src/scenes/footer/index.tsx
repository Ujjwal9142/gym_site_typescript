import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16 ">
      <div className="mx-auto w-5/6 justify-between gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="Logo" />
          <p className="my-5">
            Libero nunc consequat interdum varius. Libero enim sed faucibus
            turpis in. Faucibus scelerisque eleifend donec pretium.Congue eu
            consequat ac felis. Donec ultrices tincidunt arcu non sodales.
            Mollis nunc sed id semper risus.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Dui faucibus in ornare</p>
          <p className="my-5">Leo duis ut diam</p>
          <p>Non diam phasellus</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Mollis nunc sed id semper risus.</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

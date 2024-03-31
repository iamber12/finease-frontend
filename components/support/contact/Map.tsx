const Map = () => {
  return (
    <div className="box xl:p-6">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23159.36149081249!2d-80.53391359999999!3d43.483136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf6ad02edccff%3A0xdd9df23996268e17!2sUniversity%20of%20Waterloo!5e0!3m2!1sen!2sca!4v1711862777488!5m2!1sen!2sca"
        width="100%"
        height="450"
        style={{ border: 0 }}
        className="rounded-xl border border-n30 dark:border-n500"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default Map;

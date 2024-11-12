import illustrator from '../../assets/illustrator.svg';

function EmptyLink() {
  return (
    <div className="flex flex-col items-center rounded-md bg-white-100 p-9 mt-7">
      <img className="w-80 h-48" src={illustrator} alt="illustrator" />

      <h2 className="text-4xl font-bold my-6 text-center">
        Let&apos;s get you started
      </h2>
      <p className="xl:px-16 text-center text-brown-200">
        Use the &quot;Add new link&quot; button to get started. Once you have
        more than one link, you can reorder and edit them. We&apos;re here to
        help you share your profiles with everyone!
      </p>
      <div className="text-right mt-7"></div>
    </div>
  );
}

export default EmptyLink;

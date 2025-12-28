import illustrator from '../../assets/illustrator.svg';

function EmptyLink() {
  return (
    <div className="mt-7 flex flex-col items-center rounded-md bg-white-100 p-9">
      <img className="h-48 w-80" src={illustrator} alt="illustrator" />

      <h2 className="my-6 text-center text-4xl font-bold">
        Let&apos;s get you started
      </h2>
      <p className="text-center text-brown-200 xl:px-16">
        Use the &quot;Add new link&quot; button to get started. Once you have
        more than one link, you can reorder and edit them. We&apos;re here to
        help you share your profiles with everyone!
      </p>
      <div className="mt-7 text-right"></div>
    </div>
  );
}

export default EmptyLink;

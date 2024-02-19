import FormWithStep from "@/components/steps/form-with-multistep";

export default function Registration() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center  max-w-[1400px]">
        <section className="w-[540px] min-h-[443px] -mt-24">
          <FormWithStep />
        </section>
      </div>
    </>
  );
}

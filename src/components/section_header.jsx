export default function SectionHeader({ title, className }) {
  return (
    <div className={`flex items-center gap-4 pb-8 ${className ?? ""} px-8 sm:px-0`}>
      <div className="solid-background p-4">
        <h3 className="whitespace-nowrap gradient-primary-text">
          {title}
        </h3>
      </div>
      <div className="h-2 rounded-full gradient-section flex-1" />
    </div>
  );
}

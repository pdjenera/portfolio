import StatusDot from "@/components/atoms/StatusDot";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-5">
      <div className="max-w-[1140px] mx-auto px-[26px] py-[30px] flex items-center justify-between gap-4 flex-wrap font-heading text-[12.5px] text-muted">
        <div className="flex items-center gap-2.5">
          <StatusDot size={8} />
          <span className="text-fg font-medium">Peter Djeneralovic</span>
          <span>— freelance software developer</span>
        </div>
        <div>&copy; {new Date().getFullYear()} &middot; built &amp; maintained with care</div>
      </div>
    </footer>
  );
}

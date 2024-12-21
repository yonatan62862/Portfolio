export default function Footer(): JSX.Element {
  return (
    <footer className="relative bottom-10">
      <div className="text-center mt-10">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Yonatan Cohen. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

'use client';

export default function Nav({ title }: {title: string}) {
  return (
    <div className="page-header-below">
      <div className="wfp-wrapper page-header-below__inner ph2 ph0-lg">
        <nav className="wfp-breadcrumbs">
          <ol className="breadcrumbs--wrapper">
            <li className="breadcrumbs--item">
              <a href="/" className="breadcrumbs--link home">
                <span className="icon-home-dark xsmall"></span>
                <span>Home</span>
              </a>
            </li>
            <li className="breadcrumbs--item">
              <a  className="breadcrumbs--link">{title}</a>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

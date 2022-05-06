import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid py-5 px-5 bg-dark text-white">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
        <div class="col-md-4 d-flex align-items-center">
          <span class="text-white">Created by Avi Kasliwal</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3">
            <a class="text-muted" href="/">
              link
            </a>
          </li>
          <li class="ms-3">
            <a class="text-muted" href="/">
              link
            </a>
          </li>
          <li class="ms-3">
            <a class="text-muted" href="/">
              link
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;

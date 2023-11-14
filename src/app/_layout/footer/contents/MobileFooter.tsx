import React from "react";

const MobileFooter = () => {
  return (
    <div className="w-full h-44 bg-gray-50  bottom-0 p-4  ">
      <div className="w-full h-12 flex justify-between items-center">
        <div className="w-3/4  h-1/3 flex justify-between items-center">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEMUlEQVR4Ae2WA5DkWhSGszbGSjpp2/batm3btm3vs23btm379fC8v1IvO1Zmy3OrvkH3yfmPcu9l6lf9qstq2rhxS4NO18eo148TFAo1PmrctnVrVuC4dLVS2aCkrZLnm4MWl0UYjhqnJCWld+3cecfJEycSPXv0IC4n541oOHxq6pQpH+m12tcQUJ//bRsCo6DgNTzHu4lyGtHnbAO5wklgDLie57i3d+/alfjpp5+of79+lJWRQZMnTaK7776btGo1IYCHVYLQisGCuKBW8uOuOcSdLvqUvZM+YwfKEbeDe0EeEEXugVgikaATJ06Qz+ulMaNH09tvv01TJk8mi8n0NVoxF7YjkPnwoIff/uET7K/0JUv5n7APPXwN16o24hbwCqCSXLxwgfLz8+mvv/6iV199lWbOmEEvvvAC3XfvveRHQKgCwa4QFGmUPO1fr0j88Tb7xdUHuftUAj9U4PloTcTbgtvLiqMF1KdXL3r6qafos88+oxPHj5PJYCCfx0NOu120KYtOzT+xZ43CqNfwU9GWCD7LqkkA46Wyl0HM0AGxWCRCOo1G/F+iInuwrERSnUDr6sTbgEcAVQbExGrg7+p4EyhL+G4EGlQXQAz8AaiO/ABkTf4aQHXkPTAINKiteFNwp0zRIkz4h2jPDqBh5Cy9RqOGo49kiGPa1X/4HI7NHQIBV5dwOAm/G9ZIFIatQKRjMLgJDp7GTpZfW3EB2E2moo6BQD58/QJeBafAUJBZmXAz0A/cA34H5LZaZfVcAFajkeCjLHngdbAUZJQUTwH7wV+AJKwGg+hMZgvI73BQBJtS3O8vG0gheBy4pABOgAJAcRDCQy5kr1Wp6jT9aB9p4MOo1ZLDbKaA00mx0sE8AxSMlHnA5SILssY5Lm0wssXLblKSLwOC8dhsUiB5YDwT8/m+closBGHREPu5GLkVUSML0UEthUVfQPQVi0ZFX163+1IgJr2ewh7PnxjU/ozNaJwMoW/xJQV8PpozezbhUkHbtm6lPr170yyccDh6a5W1HS3ct3cvjR41ik6dOkWzZ86kdWvXksvhkILIRzWOdg6HWzNsTk5DfNCRzc5+YgouFAvmz6ebb7qJZuGhxx59lBYvXFjbdoj2a1evpvvvv198/uyZM7R2zRrx9FSw7CewmQ+b0gdRanKyb8SwYT9PmzqVzp87J1bi3nvuIbPRKCcAseR33nGHWEHcnGj6tGkUCYVez87MtFa4LacmJbVAr64KYkAmT5xIo0aMELOAsx/xwE8gF1ANKAB/4F74D7KnXj17UreuXQtsFssvmIsJTFULF0sOJVqIs/1B3HS/xuUiD84WAgvoBSaBZWAz2AP2g31gO1gNZoEhwA+x3biWfYX5egBJrIRvP3w3ZWqyMA9JMDaAYXCWwchYEG0PUT18tGCzsio9C+pX/foPmawbnhEQly8AAAAASUVORK5CYII="
            alt="바운스코드 이미지"
            className="ml-2 w-10 h-10 "
          />
          <div className="text-lg font-bold">Bounce Code EtherScan</div>
        </div>
        <div className="w-10 ml-2 ">
          <img
            src="https://static.thenounproject.com/png/1590838-200.png"
            alt="top"
            className="w-10 h-10"
          />
        </div>
      </div>
      <div className="h-0.5 bg-gray-300 w-full m-auto mt-3"></div>
      <div className="h-20">
        <ul className="h-full text-xs flex flex-col justify-center">
          <li>EtherScan @2023 (private network)</li>
          <li> Terms of Service Network Status</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileFooter;

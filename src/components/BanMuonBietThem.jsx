import React from 'react';

const BanMuonBietThem = ({ dataBanMuonBietThem }) => {
  return (
    dataBanMuonBietThem && (
      <div className="text-center space-y-5 section">
        <h3 className="text-3xl color_text_content font-bold text-center">
          {dataBanMuonBietThem?.title}
        </h3>
        <div>
          <a href="/lien-he" className="button_td text-xl !rounded-xl">
            {dataBanMuonBietThem?.cta}
          </a>
        </div>
      </div>
    )
  );
};

export default BanMuonBietThem;

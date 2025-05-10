import React, { useState, useEffect } from 'react';
import { getFaqs } from '../aboutComponent/Api';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [faqs, setFaqs] = useState([]);
  const [loadingFaqs, setLoadingFaqs] = useState(true);
  const [errorFaqs, setErrorFaqs] = useState(null);

  const [selectedCountry, setSelectedCountry] = useState({
    code: 'uz',
    flag: 'https://flagcdn.com/w20/uz.png',
    dialCode: '+998',
  });

  const countryOptions = [
    { code: 'af', flag: 'https://flagcdn.com/w20/af.png', dialCode: '+93', name: 'Afghanistan' },
    { code: 'al', flag: 'https://flagcdn.com/w20/al.png', dialCode: '+355', name: 'Albania' },
    { code: 'dz', flag: 'https://flagcdn.com/w20/dz.png', dialCode: '+213', name: 'Algeria' },
    { code: 'ad', flag: 'https://flagcdn.com/w20/ad.png', dialCode: '+376', name: 'Andorra' },
    { code: 'ao', flag: 'https://flagcdn.com/w20/ao.png', dialCode: '+244', name: 'Angola' },
    { code: 'ag', flag: 'https://flagcdn.com/w20/ag.png', dialCode: '+1-268', name: 'Antigua and Barbuda' },
    { code: 'ar', flag: 'https://flagcdn.com/w20/ar.png', dialCode: '+54', name: 'Argentina' },
    { code: 'am', flag: 'https://flagcdn.com/w20/am.png', dialCode: '+374', name: 'Armenia' },
    { code: 'au', flag: 'https://flagcdn.com/w20/au.png', dialCode: '+61', name: 'Australia' },
    { code: 'at', flag: 'https://flagcdn.com/w20/at.png', dialCode: '+43', name: 'Austria' },
    { code: 'az', flag: 'https://flagcdn.com/w20/az.png', dialCode: '+994', name: 'Azerbaijan' },
    { code: 'bs', flag: 'https://flagcdn.com/w20/bs.png', dialCode: '+1-242', name: 'Bahamas' },
    { code: 'bh', flag: 'https://flagcdn.com/w20/bh.png', dialCode: '+973', name: 'Bahrain' },
    { code: 'bd', flag: 'https://flagcdn.com/w20/bd.png', dialCode: '+880', name: 'Bangladesh' },
    { code: 'bb', flag: 'https://flagcdn.com/w20/bb.png', dialCode: '+1-246', name: 'Barbados' },
    { code: 'by', flag: 'https://flagcdn.com/w20/by.png', dialCode: '+375', name: 'Belarus' },
    { code: 'be', flag: 'https://flagcdn.com/w20/be.png', dialCode: '+32', name: 'Belgium' },
    { code: 'bz', flag: 'https://flagcdn.com/w20/bz.png', dialCode: '+501', name: 'Belize' },
    { code: 'bj', flag: 'https://flagcdn.com/w20/bj.png', dialCode: '+229', name: 'Benin' },
    { code: 'bt', flag: 'https://flagcdn.com/w20/bt.png', dialCode: '+975', name: 'Bhutan' },
    { code: 'bo', flag: 'https://flagcdn.com/w20/bo.png', dialCode: '+591', name: 'Bolivia' },
    { code: 'ba', flag: 'https://flagcdn.com/w20/ba.png', dialCode: '+387', name: 'Bosnia and Herzegovina' },
    { code: 'bw', flag: 'https://flagcdn.com/w20/bw.png', dialCode: '+267', name: 'Botswana' },
    { code: 'br', flag: 'https://flagcdn.com/w20/br.png', dialCode: '+55', name: 'Brazil' },
    { code: 'bn', flag: 'https://flagcdn.com/w20/bn.png', dialCode: '+673', name: 'Brunei' },
    { code: 'bg', flag: 'https://flagcdn.com/w20/bg.png', dialCode: '+359', name: 'Bulgaria' },
    { code: 'bf', flag: 'https://flagcdn.com/w20/bf.png', dialCode: '+226', name: 'Burkina Faso' },
    { code: 'bi', flag: 'https://flagcdn.com/w20/bi.png', dialCode: '+257', name: 'Burundi' },
    { code: 'kh', flag: 'https://flagcdn.com/w20/kh.png', dialCode: '+855', name: 'Cambodia' },
    { code: 'cm', flag: 'https://flagcdn.com/w20/cm.png', dialCode: '+237', name: 'Cameroon' },
    { code: 'ca', flag: 'https://flagcdn.com/w20/ca.png', dialCode: '+1', name: 'Canada' },
    { code: 'cv', flag: 'https://flagcdn.com/w20/cv.png', dialCode: '+238', name: 'Cape Verde' },
    { code: 'cf', flag: 'https://flagcdn.com/w20/cf.png', dialCode: '+236', name: 'Central African Republic' },
    { code: 'td', flag: 'https://flagcdn.com/w20/td.png', dialCode: '+235', name: 'Chad' },
    { code: 'cl', flag: 'https://flagcdn.com/w20/cl.png', dialCode: '+56', name: 'Chile' },
    { code: 'cn', flag: 'https://flagcdn.com/w20/cn.png', dialCode: '+86', name: 'China' },
    { code: 'co', flag: 'https://flagcdn.com/w20/co.png', dialCode: '+57', name: 'Colombia' },
    { code: 'km', flag: 'https://flagcdn.com/w20/km.png', dialCode: '+269', name: 'Comoros' },
    { code: 'cg', flag: 'https://flagcdn.com/w20/cg.png', dialCode: '+242', name: 'Congo' },
    { code: 'cd', flag: 'https://flagcdn.com/w20/cd.png', dialCode: '+243', name: 'Congo (DRC)' },
    { code: 'cr', flag: 'https://flagcdn.com/w20/cr.png', dialCode: '+506', name: 'Costa Rica' },
    { code: 'hr', flag: 'https://flagcdn.com/w20/hr.png', dialCode: '+385', name: 'Croatia' },
    { code: 'cu', flag: 'https://flagcdn.com/w20/cu.png', dialCode: '+53', name: 'Cuba' },
    { code: 'cy', flag: 'https://flagcdn.com/w20/cy.png', dialCode: '+357', name: 'Cyprus' },
    { code: 'cz', flag: 'https://flagcdn.com/w20/cz.png', dialCode: '+420', name: 'Czech Republic' },
    { code: 'dk', flag: 'https://flagcdn.com/w20/dk.png', dialCode: '+45', name: 'Denmark' },
    { code: 'dj', flag: 'https://flagcdn.com/w20/dj.png', dialCode: '+253', name: 'Djibouti' },
    { code: 'dm', flag: 'https://flagcdn.com/w20/dm.png', dialCode: '+1-767', name: 'Dominica' },
    { code: 'do', flag: 'https://flagcdn.com/w20/do.png', dialCode: '+1-809', name: 'Dominican Republic' },
    { code: 'ec', flag: 'https://flagcdn.com/w20/ec.png', dialCode: '+593', name: 'Ecuador' },
    { code: 'eg', flag: 'https://flagcdn.com/w20/eg.png', dialCode: '+20', name: 'Egypt' },
    { code: 'sv', flag: 'https://flagcdn.com/w20/sv.png', dialCode: '+503', name: 'El Salvador' },
    { code: 'gq', flag: 'https://flagcdn.com/w20/gq.png', dialCode: '+240', name: 'Equatorial Guinea' },
    { code: 'er', flag: 'https://flagcdn.com/w20/er.png', dialCode: '+291', name: 'Eritrea' },
    { code: 'ee', flag: 'https://flagcdn.com/w20/ee.png', dialCode: '+372', name: 'Estonia' },
    { code: 'sz', flag: 'https://flagcdn.com/w20/sz.png', dialCode: '+268', name: 'Eswatini' },
    { code: 'et', flag: 'https://flagcdn.com/w20/et.png', dialCode: '+251', name: 'Ethiopia' },
    { code: 'fj', flag: 'https://flagcdn.com/w20/fj.png', dialCode: '+679', name: 'Fiji' },
    { code: 'fi', flag: 'https://flagcdn.com/w20/fi.png', dialCode: '+358', name: 'Finland' },
    { code: 'fr', flag: 'https://flagcdn.com/w20/fr.png', dialCode: '+33', name: 'France' },
    { code: 'ga', flag: 'https://flagcdn.com/w20/ga.png', dialCode: '+241', name: 'Gabon' },
    { code: 'gm', flag: 'https://flagcdn.com/w20/gm.png', dialCode: '+220', name: 'Gambia' },
    { code: 'ge', flag: 'https://flagcdn.com/w20/ge.png', dialCode: '+995', name: 'Georgia' },
    { code: 'de', flag: 'https://flagcdn.com/w20/de.png', dialCode: '+49', name: 'Germany' },
    { code: 'gh', flag: 'https://flagcdn.com/w20/gh.png', dialCode: '+233', name: 'Ghana' },
    { code: 'gr', flag: 'https://flagcdn.com/w20/gr.png', dialCode: '+30', name: 'Greece' },
    { code: 'gd', flag: 'https://flagcdn.com/w20/gd.png', dialCode: '+1-473', name: 'Grenada' },
    { code: 'gt', flag: 'https://flagcdn.com/w20/gt.png', dialCode: '+502', name: 'Guatemala' },
    { code: 'gn', flag: 'https://flagcdn.com/w20/gn.png', dialCode: '+224', name: 'Guinea' },
    { code: 'gw', flag: 'https://flagcdn.com/w20/gw.png', dialCode: '+245', name: 'Guinea-Bissau' },
    { code: 'gy', flag: 'https://flagcdn.com/w20/gy.png', dialCode: '+592', name: 'Guyana' },
    { code: 'ht', flag: 'https://flagcdn.com/w20/ht.png', dialCode: '+509', name: 'Haiti' },
    { code: 'hn', flag: 'https://flagcdn.com/w20/hn.png', dialCode: '+504', name: 'Honduras' },
    { code: 'hu', flag: 'https://flagcdn.com/w20/hu.png', dialCode: '+36', name: 'Hungary' },
    { code: 'is', flag: 'https://flagcdn.com/w20/is.png', dialCode: '+354', name: 'Iceland' },
    { code: 'in', flag: 'https://flagcdn.com/w20/in.png', dialCode: '+91', name: 'India' },
    { code: 'id', flag: 'https://flagcdn.com/w20/id.png', dialCode: '+62', name: 'Indonesia' },
    { code: 'ir', flag: 'https://flagcdn.com/w20/ir.png', dialCode: '+98', name: 'Iran' },
    { code: 'iq', flag: 'https://flagcdn.com/w20/iq.png', dialCode: '+964', name: 'Iraq' },
    { code: 'ie', flag: 'https://flagcdn.com/w20/ie.png', dialCode: '+353', name: 'Ireland' },
    { code: 'il', flag: 'https://flagcdn.com/w20/il.png', dialCode: '+972', name: 'Israel' },
    { code: 'it', flag: 'https://flagcdn.com/w20/it.png', dialCode: '+39', name: 'Italy' },
    { code: 'jm', flag: 'https://flagcdn.com/w20/jm.png', dialCode: '+1-876', name: 'Jamaica' },
    { code: 'jp', flag: 'https://flagcdn.com/w20/jp.png', dialCode: '+81', name: 'Japan' },
    { code: 'jo', flag: 'https://flagcdn.com/w20/jo.png', dialCode: '+962', name: 'Jordan' },
    { code: 'kz', flag: 'https://flagcdn.com/w20/kz.png', dialCode: '+7', name: 'Kazakhstan' },
    { code: 'ke', flag: 'https://flagcdn.com/w20/ke.png', dialCode: '+254', name: 'Kenya' },
    { code: 'ki', flag: 'https://flagcdn.com/w20/ki.png', dialCode: '+686', name: 'Kiribati' },
    { code: 'kw', flag: 'https://flagcdn.com/w20/kw.png', dialCode: '+965', name: 'Kuwait' },
    { code: 'kg', flag: 'https://flagcdn.com/w20/kg.png', dialCode: '+996', name: 'Kyrgyzstan' },
    { code: 'la', flag: 'https://flagcdn.com/w20/la.png', dialCode: '+856', name: 'Laos' },
    { code: 'lv', flag: 'https://flagcdn.com/w20/lv.png', dialCode: '+371', name: 'Latvia' },
    { code: 'lb', flag: 'https://flagcdn.com/w20/lb.png', dialCode: '+961', name: 'Lebanon' },
    { code: 'ls', flag: 'https://flagcdn.com/w20/ls.png', dialCode: '+266', name: 'Lesotho' },
    { code: 'lr', flag: 'https://flagcdn.com/w20/lr.png', dialCode: '+231', name: 'Liberia' },
    { code: 'ly', flag: 'https://flagcdn.com/w20/ly.png', dialCode: '+218', name: 'Libya' },
    { code: 'li', flag: 'https://flagcdn.com/w20/li.png', dialCode: '+423', name: 'Liechtenstein' },
    { code: 'lt', flag: 'https://flagcdn.com/w20/lt.png', dialCode: '+370', name: 'Lithuania' },
    { code: 'lu', flag: 'https://flagcdn.com/w20/lu.png', dialCode: '+352', name: 'Luxembourg' },
    { code: 'mg', flag: 'https://flagcdn.com/w20/mg.png', dialCode: '+261', name: 'Madagascar' },
    { code: 'mw', flag: 'https://flagcdn.com/w20/mw.png', dialCode: '+265', name: 'Malawi' },
    { code: 'my', flag: 'https://flagcdn.com/w20/my.png', dialCode: '+60', name: 'Malaysia' },
    { code: 'mv', flag: 'https://flagcdn.com/w20/mv.png', dialCode: '+960', name: 'Maldives' },
    { code: 'ml', flag: 'https://flagcdn.com/w20/ml.png', dialCode: '+223', name: 'Mali' },
    { code: 'mt', flag: 'https://flagcdn.com/w20/mt.png', dialCode: '+356', name: 'Malta' },
    { code: 'mh', flag: 'https://flagcdn.com/w20/mh.png', dialCode: '+692', name: 'Marshall Islands' },
    { code: 'mr', flag: 'https://flagcdn.com/w20/mr.png', dialCode: '+222', name: 'Mauritania' },
    { code: 'mu', flag: 'https://flagcdn.com/w20/mu.png', dialCode: '+230', name: 'Mauritius' },
    { code: 'mx', flag: 'https://flagcdn.com/w20/mx.png', dialCode: '+52', name: 'Mexico' },
    { code: 'fm', flag: 'https://flagcdn.com/w20/fm.png', dialCode: '+691', name: 'Micronesia' },
    { code: 'md', flag: 'https://flagcdn.com/w20/md.png', dialCode: '+373', name: 'Moldova' },
    { code: 'mc', flag: 'https://flagcdn.com/w20/mc.png', dialCode: '+377', name: 'Monaco' },
    { code: 'mn', flag: 'https://flagcdn.com/w20/mn.png', dialCode: '+976', name: 'Mongolia' },
    { code: 'me', flag: 'https://flagcdn.com/w20/me.png', dialCode: '+382', name: 'Montenegro' },
    { code: 'ma', flag: 'https://flagcdn.com/w20/ma.png', dialCode: '+212', name: 'Morocco' },
    { code: 'mz', flag: 'https://flagcdn.com/w20/mz.png', dialCode: '+258', name: 'Mozambique' },
    { code: 'mm', flag: 'https://flagcdn.com/w20/mm.png', dialCode: '+95', name: 'Myanmar' },
    { code: 'na', flag: 'https://flagcdn.com/w20/na.png', dialCode: '+264', name: 'Namibia' },
    { code: 'nr', flag: 'https://flagcdn.com/w20/nr.png', dialCode: '+674', name: 'Nauru' },
    { code: 'np', flag: 'https://flagcdn.com/w20/np.png', dialCode: '+977', name: 'Nepal' },
    { code: 'nl', flag: 'https://flagcdn.com/w20/nl.png', dialCode: '+31', name: 'Netherlands' },
    { code: 'nz', flag: 'https://flagcdn.com/w20/nz.png', dialCode: '+64', name: 'New Zealand' },
    { code: 'ni', flag: 'https://flagcdn.com/w20/ni.png', dialCode: '+505', name: 'Nicaragua' },
    { code: 'ne', flag: 'https://flagcdn.com/w20/ne.png', dialCode: '+227', name: 'Niger' },
    { code: 'ng', flag: 'https://flagcdn.com/w20/ng.png', dialCode: '+234', name: 'Nigeria' },
    { code: 'kp', flag: 'https://flagcdn.com/w20/kp.png', dialCode: '+850', name: 'North Korea' },
    { code: 'mk', flag: 'https://flagcdn.com/w20/mk.png', dialCode: '+389', name: 'North Macedonia' },
    { code: 'no', flag: 'https://flagcdn.com/w20/no.png', dialCode: '+47', name: 'Norway' },
    { code: 'om', flag: 'https://flagcdn.com/w20/om.png', dialCode: '+968', name: 'Oman' },
    { code: 'pk', flag: 'https://flagcdn.com/w20/pk.png', dialCode: '+92', name: 'Pakistan' },
    { code: 'pw', flag: 'https://flagcdn.com/w20/pw.png', dialCode: '+680', name: 'Palau' },
    { code: 'pa', flag: 'https://flagcdn.com/w20/pa.png', dialCode: '+507', name: 'Panama' },
    { code: 'pg', flag: 'https://flagcdn.com/w20/pg.png', dialCode: '+675', name: 'Papua New Guinea' },
    { code: 'py', flag: 'https://flagcdn.com/w20/py.png', dialCode: '+595', name: 'Paraguay' },
    { code: 'pe', flag: 'https://flagcdn.com/w20/pe.png', dialCode: '+51', name: 'Peru' },
    { code: 'ph', flag: 'https://flagcdn.com/w20/ph.png', dialCode: '+63', name: 'Philippines' },
    { code: 'pl', flag: 'https://flagcdn.com/w20/pl.png', dialCode: '+48', name: 'Poland' },
    { code: 'pt', flag: 'https://flagcdn.com/w20/pt.png', dialCode: '+351', name: 'Portugal' },
    { code: 'qa', flag: 'https://flagcdn.com/w20/qa.png', dialCode: '+974', name: 'Qatar' },
    { code: 'ro', flag: 'https://flagcdn.com/w20/ro.png', dialCode: '+40', name: 'Romania' },
    { code: 'ru', flag: 'https://flagcdn.com/w20/ru.png', dialCode: '+7', name: 'Russia' },
    { code: 'rw', flag: 'https://flagcdn.com/w20/rw.png', dialCode: '+250', name: 'Rwanda' },
    { code: 'kn', flag: 'https://flagcdn.com/w20/kn.png', dialCode: '+1-869', name: 'Saint Kitts and Nevis' },
    { code: 'lc', flag: 'https://flagcdn.com/w20/lc.png', dialCode: '+1-758', name: 'Saint Lucia' },
    { code: 'vc', flag: 'https://flagcdn.com/w20/vc.png', dialCode: '+1-784', name: 'Saint Vincent and the Grenadines' },
    { code: 'ws', flag: 'https://flagcdn.com/w20/ws.png', dialCode: '+685', name: 'Samoa' },
    { code: 'sm', flag: 'https://flagcdn.com/w20/sm.png', dialCode: '+378', name: 'San Marino' },
    { code: 'st', flag: 'https://flagcdn.com/w20/st.png', dialCode: '+239', name: 'Sao Tome and Principe' },
    { code: 'sa', flag: 'https://flagcdn.com/w20/sa.png', dialCode: '+966', name: 'Saudi Arabia' },
    { code: 'sn', flag: 'https://flagcdn.com/w20/sn.png', dialCode: '+221', name: 'Senegal' },
    { code: 'rs', flag: 'https://flagcdn.com/w20/rs.png', dialCode: '+381', name: 'Serbia' },
    { code: 'sc', flag: 'https://flagcdn.com/w20/sc.png', dialCode: '+248', name: 'Seychelles' },
    { code: 'sl', flag: 'https://flagcdn.com/w20/sl.png', dialCode: '+232', name: 'Sierra Leone' },
    { code: 'sg', flag: 'https://flagcdn.com/w20/sg.png', dialCode: '+65', name: 'Singapore' },
    { code: 'sk', flag: 'https://flagcdn.com/w20/sk.png', dialCode: '+421', name: 'Slovakia' },
    { code: 'si', flag: 'https://flagcdn.com/w20/si.png', dialCode: '+386', name: 'Slovenia' },
    { code: 'sb', flag: 'https://flagcdn.com/w20/sb.png', dialCode: '+677', name: 'Solomon Islands' },
    { code: 'so', flag: 'https://flagcdn.com/w20/so.png', dialCode: '+252', name: 'Somalia' },
    { code: 'za', flag: 'https://flagcdn.com/w20/za.png', dialCode: '+27', name: 'South Africa' },
    { code: 'kr', flag: 'https://flagcdn.com/w20/kr.png', dialCode: '+82', name: 'South Korea' },
    { code: 'ss', flag: 'https://flagcdn.com/w20/ss.png', dialCode: '+211', name: 'South Sudan' },
    { code: 'es', flag: 'https://flagcdn.com/w20/es.png', dialCode: '+34', name: 'Spain' },
    { code: 'lk', flag: 'https://flagcdn.com/w20/lk.png', dialCode: '+94', name: 'Sri Lanka' },
    { code: 'sd', flag: 'https://flagcdn.com/w20/sd.png', dialCode: '+249', name: 'Sudan' },
    { code: 'sr', flag: 'https://flagcdn.com/w20/sr.png', dialCode: '+597', name: 'Suriname' },
    { code: 'se', flag: 'https://flagcdn.com/w20/se.png', dialCode: '+46', name: 'Sweden' },
    { code: 'ch', flag: 'https://flagcdn.com/w20/ch.png', dialCode: '+41', name: 'Switzerland' },
    { code: 'sy', flag: 'https://flagcdn.com/w20/sy.png', dialCode: '+963', name: 'Syria' },
    { code: 'tw', flag: 'https://flagcdn.com/w20/tw.png', dialCode: '+886', name: 'Taiwan' },
    { code: 'tj', flag: 'https://flagcdn.com/w20/tj.png', dialCode: '+992', name: 'Tajikistan' },
    { code: 'tz', flag: 'https://flagcdn.com/w20/tz.png', dialCode: '+255', name: 'Tanzania' },
    { code: 'th', flag: 'https://flagcdn.com/w20/th.png', dialCode: '+66', name: 'Thailand' },
    { code: 'tl', flag: 'https://flagcdn.com/w20/tl.png', dialCode: '+670', name: 'Timor-Leste' },
    { code: 'tg', flag: 'https://flagcdn.com/w20/tg.png', dialCode: '+228', name: 'Togo' },
    { code: 'to', flag: 'https://flagcdn.com/w20/to.png', dialCode: '+676', name: 'Tonga' },
    { code: 'tt', flag: 'https://flagcdn.com/w20/tt.png', dialCode: '+1-868', name: 'Trinidad and Tobago' },
    { code: 'tn', flag: 'https://flagcdn.com/w20/tn.png', dialCode: '+216', name: 'Tunisia' },
    { code: 'tr', flag: 'https://flagcdn.com/w20/tr.png', dialCode: '+90', name: 'Turkey' },
    { code: 'tm', flag: 'https://flagcdn.com/w20/tm.png', dialCode: '+993', name: 'Turkmenistan' },
    { code: 'tv', flag: 'https://flagcdn.com/w20/tv.png', dialCode: '+688', name: 'Tuvalu' },
    { code: 'ug', flag: 'https://flagcdn.com/w20/ug.png', dialCode: '+256', name: 'Uganda' },
    { code: 'ua', flag: 'https://flagcdn.com/w20/ua.png', dialCode: '+380', name: 'Ukraine' },
    { code: 'ae', flag: 'https://flagcdn.com/w20/ae.png', dialCode: '+971', name: 'United Arab Emirates' },
    { code: 'gb', flag: 'https://flagcdn.com/w20/gb.png', dialCode: '+44', name: 'United Kingdom' },
    { code: 'us', flag: 'https://flagcdn.com/w20/us.png', dialCode: '+1', name: 'United States' },
    { code: 'uy', flag: 'https://flagcdn.com/w20/uy.png', dialCode: '+598', name: 'Uruguay' },
    { code: 'uz', flag: 'https://flagcdn.com/w20/uz.png', dialCode: '+998', name: 'Uzbekistan' },
    { code: 'vu', flag: 'https://flagcdn.com/w20/vu.png', dialCode: '+678', name: 'Vanuatu' },
    { code: 've', flag: 'https://flagcdn.com/w20/ve.png', dialCode: '+58', name: 'Venezuela' },
    { code: 'vn', flag: 'https://flagcdn.com/w20/vn.png', dialCode: '+84', name: 'Vietnam' },
    { code: 'ye', flag: 'https://flagcdn.com/w20/ye.png', dialCode: '+967', name: 'Yemen' },
    { code: 'zm', flag: 'https://flagcdn.com/w20/zm.png', dialCode: '+260', name: 'Zambia' },
    { code: 'zw', flag: 'https://flagcdn.com/w20/zw.png', dialCode: '+263', name: 'Zimbabwe' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCountryChange = (e) => {
    const selected = countryOptions.find((country) => country.code === e.target.value);
    setSelectedCountry(selected);
  };

  const handlePhoneKeyPress = (e) => {
    const charCode = e.charCode;
    if (charCode < 48 || charCode > 57) {
      e.preventDefault();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const token = '7147216021:AAGMuN5Lt37qcPAY62u6eccBjVcDKwMK0nE';
    const chatId = '7317699848';
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const message = `
Ism: ${formData.name}
Email: ${formData.email}
Telefon: ${selectedCountry.dialCode}${formData.phone}
Xabar: ${formData.message}
    `.trim();

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSuccess(false), 3000);
      } else {
        throw new Error("An error occurred while sending the message");
      }
    } catch (error) {
      console.error("Telegram error:", error);
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const data = await getFaqs();
        if (data && data.length > 0) {
          setFaqs(data);
        } else {
          setErrorFaqs("Frequently asked questions not found or not available.");
        }
      } catch (error) {
        console.error("Error loading FAQ data:", error);
        setErrorFaqs("An error occurred while loading the data:" + error.message);
      } finally {
        setLoadingFaqs(false);
      }
    };

    fetchFaqs();
  }, []);

  return (
    <div className="bg-gray-100 w-full min-h-screen py-6 sm:py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4 sm:mb-6">Contact Us</h1>
        <p className="text-center text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base">
          Get in touch with us for any questions about our products or services.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-6 sm:gap-8 bg-white py-6 sm:py-8 px-4 sm:px-6 lg:px-10 rounded-lg">
          <div className="bg-white p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <div className="space-y-4 sm:space-y-5 text-sm sm:text-[15px]">
              <p className="flex items-center text-gray-600">
                <svg className="w-8 h-8 sm:w-9 sm:h-9 mr-3 sm:mr-4 border-gray-200 rounded-2xl bg-gray-200 p-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
                </svg>
                <span>
                  <span className="text-black">Email</span><br />
                  msmukhlisss@gmail.com
                </span>
              </p>
              <p className="flex items-center text-gray-600">
                <svg className="w-8 h-8 sm:w-9 sm:h-9 mr-3 sm:mr-4 border-gray-200 rounded-2xl bg-gray-200 p-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>
                  <span className="text-black">Phone</span><br />
                  +998887666051<br />
                  Mon-Fri, 9am-6pm
                </span>
              </p>
              <p className="flex items-center text-gray-600">
                <svg className="w-8 h-8 sm:w-9 sm:h-9 mr-3 sm:mr-4 border-gray-200 rounded-2xl bg-gray-200 p-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>
                  <span className="text-black">Address</span><br />
                  Toshkent, Yunusobod
                </span>
              </p>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Contact Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded text-sm sm:text-base"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-2 sm:space-y-0">
                  <div className="flex items-center">
                    <select
                      value={selectedCountry.code}
                      onChange={handleCountryChange}
                      className="p-2 sm:p-3 border border-gray-300 rounded mr-2 text-sm sm:text-base w-32 sm:w-40"
                    >
                      {countryOptions.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                    <img
                      src={selectedCountry.flag}
                      alt={`${selectedCountry.name} flag`}
                      className="w-5 h-5 mr-1"
                    />
                    <span className="text-gray-600 pr-5 text-sm sm:text-base">{selectedCountry.dialCode}</span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onKeyPress={handlePhoneKeyPress}
                    placeholder="Phone"
                    pattern="[0-9]*"
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded text-sm sm:text-base"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded h-24 sm:h-32 text-sm sm:text-base"
                  required
                />
              </div>
              <div className="flex justify-start">
                <button
                  type="submit"
                  className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-gray-800 transition flex items-center text-sm sm:text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 mr-2 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
              {success && <p className="text-green-500 text-center text-sm sm:text-base">Message sent successfully!</p>}
            </form>
          </div>
        </div>

        <div className="mt-8 sm:mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4 sm:mb-6">Frequently Asked Questions</h2>
          {loadingFaqs ? (
            <div className="flex justify-center items-center py-8 sm:py-10">
              <div className="flex space-x-3">
                <div
                  className="w-4 sm:w-5 h-4 sm:h-5 bg-gray-500 rounded-full animate-pulse-custom"
                  style={{ animationDelay: '0s' }}
                ></div>
                <div
                  className="w-4 sm:w-5 h-4 sm:h-5 bg-gray-500 rounded-full animate-pulse-custom"
                  style={{ animationDelay: '0.2s' }}
                ></div>
                <div
                  className="w-4 sm:w-5 h-4 sm:h-5 bg-gray-500 rounded-full animate-pulse-custom"
                  style={{ animationDelay: '0.4s' }}
                ></div>
              </div>
            </div>
          ) : errorFaqs ? (
            <div className="text-center py-8 sm:py-10 text-red-500 text-sm sm:text-base">{errorFaqs}</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">{faq.question_en}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{faq.answer_en}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
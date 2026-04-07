export interface KeyMember {
  id: string;
  name: string;
  credentials?: string;
  role: string;
  institution: string;
  imageUrl: string;
  bio: string;
}

export const keyMembersData: KeyMember[] = [
  {
    id: "bibi-florina",
    name: "Prof. Datuk Dr. Hajjah Bibi Florina Abdullah",
    role: "Pro-Chancellor",
    institution: "Lincoln University College, Malaysia",
    imageUrl: "https://icetmtshs.lincoln.edu.my/wp-content/uploads/2023/11/Prof-Datuk-Dr-Hajjah-Bibi.jpg",
    bio: "Prof. Datuk Dr. Hjh. Bibi Florina Binti Abdullah, the Pro-Chancellor of Lincoln University College, was the First Director of Nursing, Ministry of Health, Malaysia. She has also served as the Registrar of Nursing Board, Malaysia and has the greatest passion in changing the whole face of the nursing profession. She was instrumental in professionalized nursing as a profession from the diploma to the degree level. Undoubtedly, her passion in nursing field has been continually transformed to Lincoln University College.",
  },
  {
    id: "amiya-bhaumik",
    name: "Prof. Dr. Amiya Bhaumik",
    role: "President",
    institution: "Lincoln University College, Malaysia",
    imageUrl: "https://icetmtshs.lincoln.edu.my/wp-content/uploads/2023/11/dr-amiya.jpg",
    bio: "Dr. Amiya Bhaumik, Founder & President, Lincoln University College, Malaysia, is primarily from the field of Education. He has been an Executive Vice President of the International Education Consulting Group in St. Louis, USA, since 1999. Additionally, Dr. Bhaumik was a Research Fellow at UNESCO in Paris. During this tenure, he extensively travelled to Europe, Africa, Asia and Latin America. He has also served as a Professor of Business Administration at the University of Lucknow, India, the University of Malaya, Malaysia, and several other countries.",
  },
  {
    id: "mohd-yusoff",
    name: "Dato (Amb) Dr. Mohd Yusoff Bin A. Bakar",
    role: "Vice Chancellor & CEO",
    institution: "Lincoln University College, Malaysia",
    imageUrl: "https://icetmtshs.lincoln.edu.my/wp-content/uploads/2023/11/dr-mohd-yusoff.png",
    bio: "Dato (Amb) Dr. Mohd Yusoff Bin A. Bakar is the Vice Chancellor and Chief Executive Officer Lincoln University College, Malaysia. He is also Deputy CEO of the Euroskil Vocational Training Academy (ETVA) from 2018 till date. He was the Deputy Vice Chancellor (Student Affairs) of Lincoln University College from 2014 for more than 6 years. He was the Ambassador in Ministry of Foreign Affairs from 1981 till 2001. Dato Yusoff has been associated with the Ministry since 1975 in various countries. He has volunteered as Chairman of The Board an international charity organization from 2009 associated with Disaster and Humanitarian Relief Cause. Over the years, he has shown professional working proficiency with upright Leadership skills and administrative expertise.",
  },
  {
    id: "hafizah",
    name: "Prof. Datin Dr. Hafizah Che Hassan",
    role: "Deputy Vice Chancellor (Academic)",
    institution: "Lincoln University College, Malaysia",
    imageUrl: "https://icetmtshs.lincoln.edu.my/wp-content/uploads/2023/11/Prof-Datin-Dr-Hafizah.jpg",
    bio: "Prof. Datin Dr. Hafizah graduated as a registered nurse from College of Nursing, Penang in 1974. She predominantly worked as a renal nurse where she specialized in Renal and Urology with a Certificate of Renal Nursing from the Beaumont Hospital, Dublin, Australia in 1987. She has been working as an educator for 32 years. She obtained her Certificate of Advanced Diploma in Teaching from University of Malaya in 1982. In 1993, she obtained her BSc Nursing from University of Sydney, Australia. She completed her Master of Education in 2000 from University of Malaya, and her PhD in Health Sciences from Lincoln University in 2017. She has extensive experience in both undergraduate and postgraduate nursing education, and has been actively involved as a program and curriculum auditor for Malaysian Nursing Board and Malaysian Qualifications Agency.",
  },
  {
    id: "zarina-awang",
    name: "Prof. Dr. Zarina Awang",
    role: "Dean, Faculty of Medicine",
    institution: "Lincoln University College, Malaysia",
    imageUrl: "https://icetmtshs.lincoln.edu.my/wp-content/uploads/2023/11/Prof-Dr-Zarina-Awang.png",
    bio: "Prof. Dr. Zarina Awang completed MD from the National University of Malaysia (UKM) in August 1986, Master M.Ed. (Anaesthesia) from UKM in April 1994, M.Sc. in Health Care Management from the University of Wales, Swansea, United Kingdom in July 2001. She is a Lecturer in Pharmacology and Therapeutics in Lincoln University College (LUC), Malaysia. She is also serving as a Lecturer and Instructor Trainer for Basic Life Support, Advance Cardiac Life Support, Cardio Pulmonary Resuscitation (CPR) courses programme for Dental and Medical students at LUC. Her specialty includes teaching in the fields of Anaesthesia and Intensive Care, Emergency Medicine, CPR, ACLS, PALS, Clinical Pharmacology & Therapeutics.",
  },
  {
    id: "zulkarnain",
    name: "Prof. Dr. Zulkarnain A. Hatta",
    role: "Dean, Faculty of Social Sciences, Arts and Humanities",
    institution: "Lincoln University College, Malaysia",
    imageUrl: "https://icetmtshs.lincoln.edu.my/wp-content/uploads/2023/11/Prof-Dr-Zulkarnain.png",
    bio: "Prof. Dr. Zulkarnain A. Hatta is professor in Social Work with 37 years of experience in academic life, and presently works at Lincoln University College in Malaysia. Prior to joining Lincoln University College, he served at Universiti Sains Malaysia. He received his Doctor of Social Work in 2003 from Howard University, USA. He has been a Board member of the Asian and Pacific Association for Social Work Education (APASWE) since 2006, and in 2017 was elected as the President. He was also one of the Vice-Presidents of the International Association of Schools of Social Work (IASSW) from 2017–2021, a visiting lecturer at Shukutoku University, Japan, and a consultant for the OECD Korea Policy Centre, South Korea.",
  },
  {
    id: "jamaludin",
    name: "Dato' Ir Jamaludin Bin Non",
    role: "Board Member",
    institution: "Lincoln University College, Malaysia",
    imageUrl: "https://icetmtshs.lincoln.edu.my/wp-content/uploads/2023/11/Jamaludin.png",
    bio: "Dato' Ir Jamaludin Bin Non graduated from the University of Queensland Australia in 1982 and was immediately employed by MARA as Pegawai Technical. He gained hands-on experiences in steel and concrete high-rise construction and site management. He established Seri Siantan Sdn Bhd in 1986, which has since managed to complete various projects totalling over RM500 million. Over the years, he has demonstrated determination, hard work, and tenacity in facing challenges and achieving success in the construction industry.",
  },
  {
    id: "faridah",
    name: "Professor Dr. Faridah Mohd Said",
    credentials: "RN, Midwife, PHN, MSPH, PhD",
    role: "Faculty of Nursing",
    institution: "Lincoln University College, Malaysia",
    imageUrl: "https://icetmtshs.lincoln.edu.my/wp-content/uploads/2024/11/Picture1.jpg",
    bio: "Professor Dr. Faridah Mohd Said is currently at the Faculty of Nursing, Lincoln University College. She has many years of experience in clinical nursing practice, public health nursing, academia, and management. Her recent positions include Clinical Nursing Director in Madinah, Kingdom of Saudi Arabia, Deputy Dean and Head of Nursing Postgraduate and Research at Lincoln University College, and Head of Nursing Programme at University Putra Malaysia. Her research interest includes Community and Public Health, E-Health Promotion, Nursing Education, and Quality Improvement Programs (QIP). She was awarded the Excellent Outstanding Quality Patient Safety Award in Madinah, Saudi Arabia, and was an Erasmus Mundus Scholarship recipient to Portugal.",
  },
  {
    id: "mazlan",
    name: "Datuk Dr. Hj. Mazlan Hj. Ahmad",
    credentials: "CA, FCIS, CS, CGP, MBA, DBA",
    role: "Professor of Practice / Corporate Leader",
    institution: "International Centre for Education in Islamic Finance (INCEIF)",
    imageUrl: "https://icetmtshs.lincoln.edu.my/wp-content/uploads/2026/02/Datuk-Dr-Hj-Mazlan.jpg",
    bio: "Datuk Dr. Hj. Mazlan Hj. Ahmad is a distinguished corporate leader, Islamic finance strategist, and governance expert with over two decades of experience in banking, financial regulation, and strategic management. He is the Founder of the Masyi Group of Companies, an international conglomerate spanning finance, construction, real estate, hospitality, and technology. He serves as Professor of Practice at INCEIF and Adjunct Professor at IIUM. He is widely recognized as a pioneer in Islamic Social Finance reform, particularly in modernizing the waqf ecosystem through blockchain technology, AI, and digital governance. He holds a DBA from Warsaw Management University, Poland and an MBA from the University of Georgia, Netherlands.",
  },
  {
    id: "smitha",
    name: "Dr. Smitha Madhavan",
    role: "Dean, School of Health & Applied Science · Director of International Placement and Education",
    institution: "Lincoln University College",
    imageUrl: "https://icetmtshs.lincoln.edu.my/wp-content/uploads/2026/02/Dr-Smitha.jpg",
    bio: "Assoc. Professor Dr. Smitha Madhavan holds the position of Dean, School of Health & Applied Science and Director of International Placement and Education at Lincoln University College. She is also Deputy Chairperson of Research India Foundation Governing Council and Director of Nursing Research at the Directorate of Research Training & Development, Research India Foundation. With 25 years of experience in teaching and clinical instruction, Dr. Smitha is affiliated with 15 professional associations. She has received 9 Research Awards including the International Nobel Research Award and Outstanding Researcher Award, and has published 30 scientific research articles in Medline, Scopus, Web of Science, and UGC Care indexed journals.",
  },
];

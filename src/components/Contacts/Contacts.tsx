import Typography from "@mui/material/Typography";



const Contacts: React.FC = () => {
  return (
    <section className="section" id="contacts">
      <Typography sx={{ typography: { sm: 'h3', md: 'h2', lg: 'h1' } }}>
        Contacts.
      </Typography>
    </section>
  );
};

export default Contacts;
import React from 'react';

const MangaPage = ({ manga }) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '50px',
      backgroundColor: '#fff',
      boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
      borderRadius: '5px',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    cover: {
      width: '300px',
      height: 'auto',
      marginBottom: '20px',
    },
    description: {
      fontSize: '16px',
      lineHeight: '1.5',
    },
    backButton: {
      padding: '10px 20px',
      backgroundColor: '#eee',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '20px',
    },
  };

  const handleGoBack = () => {
    window.location.reload();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{manga.name}</h1>
      <img style={styles.cover} src={manga.coverPage} alt={manga.name} />
      <p style={styles.description}>{manga.description}</p>
      <button style={styles.backButton} onClick={handleGoBack}>
        Go Back
      </button>
    </div>
  );
};

export default MangaPage;

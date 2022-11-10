import  styles from './Post.module.css'

export function Post() {
  
    return (
      <article className={styles.post}>
        <header >
          <div className={styles.author}>
            <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/59839057?s=400&u=11bf0aadebb67b5fbc2b1bdf855ae2654072d3fa&v=4" alt="" />
            <div className={styles.authorInfo}>
              <strong>Danilo Sampaio Vieira</strong>
              <span>Web Developer</span>

            </div>
          </div>
          <time  time='11 de maio às 11:00' dateTime="2022-05-11 08:13:30" >Publicado a 1h</time>
        </header>
        <div className={styles.content}>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p>👉 jane.design/doctorcare</p>
            <p>#novoprojeto #nlw #rocketseat</p>
        </div>
    
      </article>
    )
  }
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>Tableaux</title>
        </Head>
        <h1>Tableaux</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>

        <section>Nom</section>
        <section>
          {/* SYNTHESE  */}
          <table border="1">
            <thead>
              <tr>
                <th colSpan="9">Synthese</th>
              </tr>
              <tr>
                <th colSpan="1"></th>
                <th colSpan="6">PRO</th>
                <th colSpan="2">CLIENT</th>
              </tr>
              <tr>
                <td></td>
                <td>Nombre</td>
                <td>Objectif</td>
                <td>Marge brute Signée</td>
                <td>Objectif MB</td>
                <td>Panier Moyen</td>
                <td>Objectif Panier Moyen</td>
                <td>Nombre</td>
                <td>Marge brute</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>48(36) mois</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>24 mois</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>12 mois</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Total</td>
                <td></td>
                <td>4</td>
                <td></td>
                <td>30000</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Moyenne</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>10000</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          {/* ANALYSE  */}
          <br />
          <table border="1">
            <thead>
              <tr>
                <th colSpan="9">Analyse</th>
              </tr>
              <tr>
                <td>PRO</td>
                <td>Nombre</td>
                <td>Objectif</td>
                <td>Moyenne semaine</td>
                <td>Nombre signé</td>
                <td>taux de transfo</td>
                <td>Objectif transfo</td>
                <td>Taux de retract</td>
                <td>Objectif retract</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>RDV pris S et S+1</td>
                <td></td>
                <td>20%</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>RDV posé perso</td>
                <td></td>
                <td>20%</td>
                <td></td>
                <td></td>
                <td></td>
                <td>20%</td>
                <td></td>
                <td>10%</td>
              </tr>
              <tr>
                <td>RDV CDA n</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>20%</td>
                <td></td>
                <td>10%</td>
              </tr>
              <tr>
                <td>RDV CDA m</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>20%</td>
                <td></td>
                <td>10%</td>
              </tr>
              <tr>
                <td>RDV parrainages</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>20%</td>
                <td></td>
                <td>10%</td>
              </tr>
              <tr>
                <td>RDV leads entrants</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>20%</td>
                <td></td>
                <td>10%</td>
              </tr>
              <tr>
                <td>RDV autres CDA</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>20%</td>
                <td></td>
                <td>10%</td>
              </tr>
              <tr>
                <td>RDV autres</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>20%</td>
                <td></td>
                <td>10%</td>
              </tr>
              <tr>
                <td>Total</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          {/* CLIENT  */}
          <br />
          <table border="1">
            <thead>
              <tr>
                <th colSpan="9">CLIENT</th>
              </tr>
              <tr>
                <td></td>
                <td>Nombre RDV client</td>
                <td>Upsell</td>
                <td>Objectif upsell</td>
                <td>signés</td>
                <td>taux de transfo</td>
                <td>Objectif transfo</td>
                <td>% refonte décoché</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>RDV pris S et S+1</td>
                <td></td>
                <td></td>
                <td>30%</td>
                <td></td>
                <td></td>
                <td>50</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          {/* VA */}
          <br />
          <table border="1">
            <thead>
              <tr>
                <th colSpan="3">VA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>Nombre</td>
                <td>Marge brute</td>
              </tr>
            </tbody>
          </table>
          {/* SUIVI */}
          <br />
          <table border="1">
            <thead>
              <tr>
                <th colSpan="3">SUIVI</th>
              </tr>
              <tr>
                <th></th>
                <th>Nombre</th>
                <th>Objectif</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Courtoisie</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>suivi</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>renouv</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>recouvrement</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Total</td>
                <td></td>
                <td>45</td>
              </tr>
            </tbody>
          </table>
          {/* PARRAINAGE */}
          <br />
          <table border="1">
            <thead>
              <tr>
                <th colSpan="3">PARRAINAGE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>Nombre</td>
                <td>Signés</td>
              </tr>
            </tbody>
          </table>
          {/* Administratif */}
          <br />
          <table border="1">
            <thead>
              <tr>
                <th colSpan="2">Administratif</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>Nombre</td>
              </tr>
              <tr>
                <td>Collecte dépassée</td>
                <td></td>
              </tr>
              <tr>
                <td>Collecte KO</td>
                <td></td>
              </tr>
              <tr>
                <td>Drapeaux rouges en cours</td>
                <td></td>
              </tr>
              <tr>
                <td>Drapeaux rouges traités</td>
                <td></td>
              </tr>
              <tr>
                <td>Délais traitement drapeuax rouges</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          {/* Avis */}
          <br />
          <table border="1">
            <thead>
              <tr>
                <th colSpan="2">Avis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>Nombre</td>
                <td>Note moyenne</td>
              </tr>
              <tr>
                <td>Avis récoltés sur la période</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Total fiche</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          {/* recouvrement */}
          <br />
          <table border="1">
            <thead>
              <tr>
                <th colSpan="2">recouvrement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>Somme récoltées</td>
                <td>Nombre de client</td>
              </tr>
            </tbody>
          </table>
        </section>
      </Layout>
    </>
  );
}

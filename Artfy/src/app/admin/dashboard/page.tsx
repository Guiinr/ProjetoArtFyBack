import { FaFire, FaTachometerAlt, FaBox, FaShoppingCart, FaUsers, FaUserCircle, FaArrowUp, FaArrowDown, FaChartLine } from 'react-icons/fa';
import styles from './Admin.module.css';

export default function AdminDashboard() {
  return (
    <div className={styles.adminContainer}>
     

      {/* Main Content */}
      <main className={styles.mainContent}>
        
        <div className={styles.contentWrapper}>
          {/* Stats Cards */}
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statInfo}>
                <h3>Total de Produtos</h3>
                <p>128</p>
                <span className={`${styles.statTrend} ${styles.up}`}>
                  <FaArrowUp /> 12%
                </span>
              </div>
              <div className={styles.statIcon}>
                <FaBox />
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statInfo}>
                <h3>Pedidos Hoje</h3>
                <p>24</p>
                <span className={`${styles.statTrend} ${styles.up}`}>
                  <FaArrowUp /> 5%
                </span>
              </div>
              <div className={styles.statIcon}>
                <FaShoppingCart />
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statInfo}>
                <h3>Usuários Ativos</h3>
                <p>1.2k</p>
                <span className={`${styles.statTrend} ${styles.up}`}>
                  <FaArrowUp /> 3%
                </span>
              </div>
              <div className={styles.statIcon}>
                <FaUsers />
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statInfo}>
                <h3>Taxa de Conversão</h3>
                <p>3.2%</p>
                <span className={`${styles.statTrend} ${styles.down}`}>
                  <FaArrowDown /> 0.5%
                </span>
              </div>
              <div className={styles.statIcon}>
                <FaChartLine />
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className={styles.recentActivity}>
            <div className={styles.sectionHeader}>
              <h2>Atividade Recente</h2>
              <a href="#" className={styles.viewAll}>Ver tudo</a>
            </div>

            <div className={styles.activityTable}>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Usuário</th>
                    <th>Ação</th>
                    <th>Data</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#1234</td>
                    <td>João Silva</td>
                    <td>Novo pedido</td>
                    <td>10/06/2023</td>
                    <td><span className={`${styles.status} ${styles.completed}`}>Completo</span></td>
                  </tr>
                  <tr>
                    <td>#1233</td>
                    <td>Maria Souza</td>
                    <td>Atualização de perfil</td>
                    <td>10/06/2023</td>
                    <td><span className={`${styles.status} ${styles.pending}`}>Pendente</span></td>
                  </tr>
                  <tr>
                    <td>#1232</td>
                    <td>Carlos Oliveira</td>
                    <td>Pagamento recebido</td>
                    <td>09/06/2023</td>
                    <td><span className={`${styles.status} ${styles.completed}`}>Completo</span></td>
                  </tr>
                  <tr>
                    <td>#1231</td>
                    <td>Ana Costa</td>
                    <td>Produto adicionado</td>
                    <td>09/06/2023</td>
                    <td><span className={`${styles.status} ${styles.processing}`}>Processando</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Charts Section */}
          <div className={styles.chartsSection}>
            <div className={styles.sectionHeader}>
              <h2>Estatísticas de Vendas</h2>
              <div className={styles.timeFilter}>
                <button className={`${styles.timeBtn} ${styles.active}`}>Hoje</button>
                <button className={styles.timeBtn}>7 dias</button>
                <button className={styles.timeBtn}>30 dias</button>
                <button className={styles.timeBtn}>Personalizado</button>
              </div>
            </div>

            <div className={styles.chartsGrid}>
              <div className={styles.chartCard}>
                <div className={styles.chartHeader}>
                  <h3>Vendas Diárias</h3>
                  <span className={styles.chartValue}>R$ 5.248,90</span>
                </div>
                <div className={styles.chartContainer}>
                  <div className={styles.chartPlaceholder}>
                    <img 
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmN2ZhIi8+PGxpbmUgeDE9IjUiIHkxPSI4MCIgeDI9Ijk1IiB5Mj0iODAiIHN0cm9rZT0iI2QxZDFkMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTUsODAgTDE1LDYwIEwyNSw3MCBMMzUsNDAgTDQ1LDYwIEw1NSwzMCBMNjUsNTAgTDc1LDQwIEw4NSw3MCBMOTUsMjAiIHN0cm9rZT0iIzRmNDZlNSIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PC9zdmc+" 
                      alt="Gráfico de vendas" 
                    />
                  </div>
                </div>
              </div>

              <div className={styles.chartCard}>
                <div className={styles.chartHeader}>
                  <h3>Vendas por Categoria</h3>
                  <span className={styles.chartValue}>24 pedidos</span>
                </div>
                <div className={styles.chartContainer}>
                  <div className={styles.chartPlaceholder}>
                    <img 
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmN2ZhIi8+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNDAiIHN0cm9rZT0iIzRmNDZlNSIgc3Ryb2tlLXdpZHRoPSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iMTI1LjYsMTI1LjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCw1MCw1MCkiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgc3Ryb2tlPSIjMTAiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IjEwMCwxMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgdHJhbnNmb3JtPSJyb3RhdGUoLTIwLDUwLDUwKSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjQwIiBzdHJva2U9IiNlZjQ0NDQiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IjUwLDUwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiIHRyYW5zZm9ybT0icm90YXRlKDkwLDUwLDUwKSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1NTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPjI0IHBlZGlkb3M8L3RleHQ+PC9zdmc+" 
                      alt="Gráfico de categorias" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Form Section */}
          <div className={styles.productFormSection}>
            <div className={styles.sectionHeader}>
              <h2>Cadastrar Novo Produto</h2>
            </div>

            <form className={styles.productForm}>
              <div className={styles.formGroup}>
                <label htmlFor="product-name">Nome do Produto</label>
                <input type="text" id="product-name" placeholder="Ex: Arte Moderna" />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="product-price">Preço</label>
                <input type="number" id="product-price" placeholder="Ex: 199.90" step="0.01" />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="product-category">Categoria</label>
                <select id="product-category">
                  <option value="">Selecione</option>
                  <option value="motor">Pintura</option>
                  <option value="filtros">Fotografia</option>
                  <option value="suspensao">Escultura</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="product-description">Descrição</label>
                <textarea id="product-description" rows={4} placeholder="Descreva o produto..." />
              </div>

              <button type="submit" className={styles.btnSubmit}>Cadastrar Produto</button>
            </form>
          </div>

          {/* Registered Products Section */}
          <div className={styles.registeredProductsSection}>
            <div className={styles.sectionHeader}>
              <h2>Produtos Cadastrados</h2>
            </div>

            <div className={styles.productsTable}>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Categoria</th>
                    <th>Preço</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#001</td>
                    <td>Filtro de óleo</td>
                    <td>Filtros</td>
                    <td>R$ 199,90</td>
                    <td>
                      <button className={`${styles.actionBtn} ${styles.edit}`}>Editar</button>
                      <button className={`${styles.actionBtn} ${styles.delete}`}>Excluir</button>
                    </td>
                  </tr>
                  <tr>
                    <td>#002</td>
                    <td>Amortecedor Traseiro</td>
                    <td>Suspensão</td>
                    <td>R$ 459,00</td>
                    <td>
                      <button className={`${styles.actionBtn} ${styles.edit}`}>Editar</button>
                      <button className={`${styles.actionBtn} ${styles.delete}`}>Excluir</button>
                    </td>
                  </tr>
                  <tr>
                    <td>#003</td>
                    <td>Óleo de Motor 5W30</td>
                    <td>Motor</td>
                    <td>R$ 89,90</td>
                    <td>
                      <button className={`${styles.actionBtn} ${styles.edit}`}>Editar</button>
                      <button className={`${styles.actionBtn} ${styles.delete}`}>Excluir</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
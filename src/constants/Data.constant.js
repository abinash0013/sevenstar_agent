const mainUrl = process.env.REACT_APP_API_URL;
// const mainUrl = `http://localhost:8000`  


const base = {
  adminLogin: `${mainUrl}/adminLogin`,
  agentLogin: `${mainUrl}/agentLogin`,
  saveAgent: `${mainUrl}/saveAgent`,
  agentsList: `${mainUrl}/agentsList`,
  agentsOwnDetails: `${mainUrl}/agentsOwnDetails`,
  agentsFilteredDetails: `${mainUrl}/agentsFilteredDetails`,  
  editAgent: `${mainUrl}/editAgent`,
  deleteAgent: `${mainUrl}/deleteAgent`,
  saveUser: `${mainUrl}/saveUser`,
  usersList: `${mainUrl}/usersList`,
  editUser: `${mainUrl}/editUser`,
  deleteUser: `${mainUrl}/deleteUser`,
  saveTicket: `${mainUrl}/saveTicket`,
  ticketList: `${mainUrl}/ticketList`,
  editTicket: `${mainUrl}/editTicket`,
  deleteTicket: `${mainUrl}/deleteTicket`,
  ticketCardView: `${mainUrl}/ticketCardView`,
  gameList: `${mainUrl}/gameList`,
  saveGame: `${mainUrl}/saveGame`,
  editGame: `${mainUrl}/editGame`,
  viewTicketForAgents: `${mainUrl}/viewTicketForAgents`,
  bookTicketByAgents: `${mainUrl}/bookTicketByAgents`,
  agentTransactionHistory: `${mainUrl}/agentTransactionHistory`,
  agentDebitRequest: `${mainUrl}/agentDebitRequest`,
  agentBookTicketAmount: `${mainUrl}/agentBookTicketAmount`,
  agentCreditDebitTransacationList: `${mainUrl}/agentCreditDebitTransacationList`,
  addMoneyToAgentWallet: `${mainUrl}/addMoneyToAgentWallet`,
  agentDetails: `${mainUrl}/agentDetails`,
  forgotPasswordByAgent: `${mainUrl}/forgotPasswordByAgent`,  
  agentEmailList: `${mainUrl}/agentEmailList`,    
}
export { base }

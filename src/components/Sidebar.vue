<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <div class="sidebar__info">
        <h2>Kaksity</h2>
        <div class="sidebar__info__name__and__status">
          <div class="sidebar__info__online"></div>
          <h3> Dauda Pona</h3>
        </div>
      </div>
        <v-icon class="sidebar__create__icon">mdi-pencil</v-icon>
    </div>
    <SideBarOption icon='mdi-message-text' title="Threads" to="/threads"/>
    <SideBarOption icon='mdi-inbox' title="Mentions & reactions" to="/mentions-reactions"/>
    <SideBarOption icon='mdi-email-open' title="Saved Items" to="/saved-items"/>
    <SideBarOption icon='mdi-pencil' title="Channel Browser" to="/channel-browser"/>
    <SideBarOption icon='mdi-account-group' title="People & user groups" to="/people"/>
    <SideBarOption icon='mdi-dots-grid' title="Apps" to="/apps"/>
    <SideBarOption icon='mdi-file' title="File browser" to="/file-browser"/>
    <SideBarOption icon='mdi-chevron-up' title="Show less"/>
    <hr/>
    <SideBarOption icon="mdi-chevron-down" title="Channels"/>
    <hr/>
    <SideBarOption icon="mdi-plus" title="Add Channel"/>
    <SideBarOption title="general"/>
    <SideBarOption title="general"/>
    <SideBarOption title="general"/>
  </div>
</template>
<style scoped>
  .sidebar{
    background-color: var(--slack-color);
    border-top: 1px solid #49274b;
    max-width: 260px;
    color: white;
    flex: 0.3;
    overflow-y: auto;
  }
  .sidebar > hr {
    margin:10px 0;
    border: 1px solid #49274b;
  }
  .sidebar__header{
    display: flex;    
    border-bottom: 1px solid #49274b;
    padding-bottom: 10px;
    padding: 13px;
  }
  .sidebar__create__icon{
    padding: 20px;
    color: #49274b;
    font-size: 20px;
    background-color: white;
    border-radius: 999px;
  }
  .sidebar__info{
    flex: 1;
  }
  .sidebar__info > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  .sidebar__info__name__and__status {
    display: flex;
    align-items: center;
  }
  .sidebar__info__online{
    margin-top: 1px;
    margin-right: 2px;
    background-color: green;
    border-radius: 90px;
    height: 20px;
    width: 20px;
  }
</style>
<script lang="ts">
import { defineComponent } from 'vue'
import SideBarOption from '@/components/SideBarOption.vue'
export default defineComponent({
  components: {
    SideBarOption
  }
})
</script>

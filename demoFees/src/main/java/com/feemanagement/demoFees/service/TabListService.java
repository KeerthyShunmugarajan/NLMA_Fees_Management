package com.feemanagement.demoFees.service;

import com.feemanagement.demoFees.DTO.TabListDTO;
import com.feemanagement.demoFees.entity.ChildTabsList;
import com.feemanagement.demoFees.entity.RolesList;
import com.feemanagement.demoFees.entity.TabList;
import com.feemanagement.demoFees.repository.TabListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TabListService {
    @Autowired
    private TabListRepository tabListRepository;

    public List<TabListDTO> getParentTabs(){
        return tabListRepository.findAll().stream().map(this::convertToTabListDTO).toList();
}

// need to move into mapper
    private TabListDTO convertToTabListDTO(TabList tabList) {
        TabListDTO tabListDTO = new TabListDTO();
        tabListDTO.setId(tabList.getId());
        tabListDTO.setKey((tabList.getKey()));
        tabListDTO.setName(tabList.getName());
        tabListDTO.setComponent(tabList.getComponent());
        tabListDTO.setOrder(tabList.getOrder());
        if(!tabList.getRoles().isEmpty())
        {
            tabListDTO.setRoles(
                    tabList.getRoles().stream().
                            map(RolesList::getRoleName).
                            collect(Collectors.toList()));
        }
        if(!tabList.getChildTabs().isEmpty())
        {
            tabListDTO.setChildTabs(
            tabList.getChildTabs().stream().
                    map(ChildTabsList::getChildTabName).
                    collect(Collectors.toList()));
        }

        return  tabListDTO;


    }
    }
